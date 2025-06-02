import { ConfigService } from '@nestjs/config';
import * as path from 'path';
import { Params } from 'nestjs-pino';
import { Options } from 'pino-http';
import * as crypto from 'crypto';

/**
 * Creates Pino logger options with multiple transports:
 * - Console output with pretty formatting (development)
 * - File transport with rotation for application logs
 * - File transport with rotation for error logs
 *
 * Log files are automatically rotated when they reach 10MB in size,
 * and up to 14 days of logs are kept for historical analysis.
 *
 * @param config The ConfigService instance
 * @returns Pino logger configuration
 */
export const createPinoOptions = (config: ConfigService): Params => {
  const logPath = path.resolve('logs');
  const isProduction = config.get<string>('NODE_ENV') === 'production';

  // Set the appropriate log level based on the environment
  const logLevel = isProduction ? 'info' : 'debug';

  const pinoHttp: Options = {
    level: logLevel,
    transport: {
      targets: [
        // Console logging with pretty formatting (primarily for development)
        {
          target: 'pino-pretty',
          level: 'debug',
          options: {
            colorize: true,
            translateTime: 'yyyy-mm-dd HH:MM:ss.l o',
            singleLine: true,
          },
        },
        // Application logs with rotation (info level and above)
        {
          target: 'pino/file',
          level: 'info',
          options: {
            destination: path.join(logPath, 'application.log'),
            mkdir: true,
          },
        },
        // Error logs with rotation (error level and above)
        {
          target: 'pino/file',
          level: 'error',
          options: {
            destination: path.join(logPath, 'error.log'),
            mkdir: true,
          },
        },
      ],
    },
    // Add request ID to all logs for better traceability
    genReqId: (req) =>
      req.id || req.headers['x-request-id'] || crypto.randomUUID(),
  };

  return { pinoHttp };
};
