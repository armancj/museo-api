import { Injectable, Logger, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { spawn, ChildProcess } from 'child_process';
import * as path from 'path';
import * as fs from 'fs';

/**
 * Service responsible for managing the Ollama process.
 * This service detects the operating system and starts the appropriate Ollama binary.
 * It also ensures the process is properly terminated when the application shuts down.
 */
@Injectable()
export class OllamaService implements OnModuleInit, OnModuleDestroy {
  private readonly logger = new Logger(OllamaService.name);
  private ollamaProcess: ChildProcess | null = null;
  private readonly isWindows = process.platform === 'win32';
  private readonly ollamaPath: string;

  constructor() {
    // Determine the path to the Ollama binary based on the operating system
    const rootDir = process.cwd();
    const binDir = path.join(rootDir, 'ollama-bin');

    if (this.isWindows) {
      this.ollamaPath = path.join(binDir, 'win', 'ollama.exe');
    } else {
      this.ollamaPath = path.join(binDir, 'linux', 'ollama');
    }

    this.logger.log(`Ollama binary path: ${this.ollamaPath}`);
  }

  /**
   * Starts the Ollama process when the module is initialized.
   */
  async onModuleInit(): Promise<void> {
    try {
      // Verify that the binary exists
      if (!fs.existsSync(this.ollamaPath)) {
        this.logger.error(`Ollama binary not found at ${this.ollamaPath}`);
        this.logger.error('Starting Ollama process failed');
        return;
      }

      this.logger.log('Starting Ollama process...');

      // Start the Ollama process
      this.ollamaProcess = spawn(this.ollamaPath, ['serve'], {
        stdio: ['ignore', 'pipe', 'pipe'],
      });

      // Log process output for debugging
      if (this.ollamaProcess.stdout) {
        this.ollamaProcess.stdout.on('data', data => {
          this.logger.debug(`Ollama stdout: ${data.toString().trim()}`);
        });
      }

      if (this.ollamaProcess.stderr) {
        this.ollamaProcess.stderr.on('data', data => {
          this.logger.debug(`Ollama stderr: ${data.toString().trim()}`);
        });
      }

      // Handle process exit
      this.ollamaProcess.on('exit', (code, signal) => {
        if (code !== 0 && code !== null) {
          this.logger.error(`Ollama process exited with code ${code}`);
        } else if (signal) {
          this.logger.log(`Ollama process terminated with signal ${signal}`);
        } else {
          this.logger.log('Ollama process exited normally');
        }
        this.ollamaProcess = null;
      });

      // Handle process error
      this.ollamaProcess.on('error', err => {
        this.logger.error(`Failed to start Ollama process: ${err.message}`);
        this.ollamaProcess = null;
      });

      this.logger.log('Ollama process started successfully');
    } catch (error) {
      this.logger.error(`Error starting Ollama process: ${error.message}`);
      throw error;
    }
  }

  /**
   * Stops the Ollama process when the module is destroyed.
   */
  async onModuleDestroy(): Promise<void> {
    if (this.ollamaProcess) {
      this.logger.log('Stopping Ollama process...');

      // Kill the process
      if (this.isWindows) {
        // On Windows, we need to use taskkill to ensure the process and its children are terminated
        if (this.ollamaProcess.pid) {
          spawn('taskkill', ['/pid', this.ollamaProcess.pid.toString(), '/f', '/t']);
        } else {
          this.logger.warn('Cannot kill process: PID is undefined');
        }
      } else {
        // On Unix-like systems, we can just kill the process
        this.ollamaProcess.kill('SIGTERM');
      }

      this.ollamaProcess = null;
      this.logger.log('Ollama process stopped');
    }
  }

  /**
   * Checks if the Ollama process is running.
   * @returns True if the Ollama process is running, false otherwise.
   */
  isRunning(): boolean {
    return this.ollamaProcess !== null;
  }
}
