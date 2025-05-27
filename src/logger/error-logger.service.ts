import { Injectable, Logger } from '@nestjs/common';
import { Request } from 'express';

/**
 * Service for enhanced error logging with additional context.
 */
@Injectable()
export class ErrorLoggerService {
  private readonly logger = new Logger(ErrorLoggerService.name);

  /**
   * Logs an error with enhanced context information.
   * 
   * @param error The error object to log
   * @param request The request object associated with the error
   * @param additionalContext Optional additional context to include in the log
   */
  logError(error: Error | unknown, request?: Request, additionalContext?: Record<string, any>): void {
    // Extract basic error information
    const errorInfo = this.extractErrorInfo(error);
    
    // Extract request information if available
    const requestInfo = request ? this.extractRequestInfo(request) : undefined;
    
    // Combine all context information
    const logContext = {
      ...errorInfo,
      ...(requestInfo && { request: requestInfo }),
      ...(additionalContext && { context: additionalContext }),
    };

    // Log the error with context
    this.logger.error(
      `Error: ${errorInfo.message}`,
      JSON.stringify(logContext, null, 2)
    );
  }

  /**
   * Extracts useful information from an error object.
   */
  private extractErrorInfo(error: Error | unknown): Record<string, any> {
    if (error instanceof Error) {
      return {
        name: error.name,
        message: error.message,
        stack: error.stack,
      };
    }
    
    return {
      message: String(error),
    };
  }

  /**
   * Extracts useful information from a request object.
   */
  private extractRequestInfo(request: Request): Record<string, any> {
    return {
      url: request.url,
      method: request.method,
      headers: this.sanitizeHeaders(request.headers),
      query: request.query,
      params: request.params,
      // Don't include body to avoid logging sensitive information
      ip: request.ip,
      userId: (request as any).user?.id, // Include user ID if available
    };
  }

  /**
   * Sanitizes request headers to remove sensitive information.
   */
  private sanitizeHeaders(headers: Record<string, any>): Record<string, any> {
    const sanitized = { ...headers };
    
    // Remove sensitive headers
    const sensitiveHeaders = ['authorization', 'cookie', 'x-auth-token'];
    for (const header of sensitiveHeaders) {
      if (sanitized[header]) {
        sanitized[header] = '[REDACTED]';
      }
    }
    
    return sanitized;
  }
}