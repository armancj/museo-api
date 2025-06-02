# Logging Guidelines

This document provides guidelines for logging in the Museo API application.

## Log Levels

The application uses the following log levels, in order of increasing severity:

| Level | Description | Usage |
|-------|-------------|-------|
| `trace` | Extremely detailed information | Used for tracing code execution at a very granular level. Only enabled in development environments for debugging specific issues. |
| `debug` | Detailed information | Used for information that is useful for debugging during development. Automatically enabled in non-production environments. |
| `info` | Normal application behavior | Used for tracking normal application behavior like successful operations, startup messages, etc. This is the default level in production. |
| `warn` | Warning conditions | Used for non-critical issues that might lead to problems if not addressed, or unexpected behavior that doesn't cause the application to fail. |
| `error` | Error conditions | Used for errors that affect a specific operation but don't crash the application. |
| `fatal` | Critical errors | Used for critical errors that might cause the application to crash or be unusable. |

## Logging Guidelines

### When to Log

- **DO** log the start and end of important operations
- **DO** log errors and exceptions with appropriate context
- **DO** log security-related events (authentication, authorization, etc.)
- **DO** log significant state changes
- **DO** log performance metrics for critical operations
- **DO NOT** log sensitive information (passwords, tokens, personal data)
- **DO NOT** log high-volume data in production (e.g., request bodies)
- **DO NOT** log redundant information

### How to Log

#### Structured Logging

Always use structured logging with context information:

```typescript
// Good
logger.info({ userId: user.id, action: 'login' }, 'User logged in');

// Bad
logger.info(`User ${user.id} logged in`);
```

#### Context Information

Include relevant context information in logs:

- Request ID for traceability across logs
- User ID for user-related operations
- Operation name or type
- Relevant entity IDs
- Duration for performance-sensitive operations

#### Error Logging

When logging errors, include:

- Error message
- Error stack trace
- Request information (URL, method, etc.)
- User context if available
- Any additional context that might help diagnose the issue

Use the `ErrorLoggerService` for enhanced error logging:

```typescript
this.errorLogger.logError(error, request, { additionalContext: 'value' });
```

## Log Storage and Rotation

Logs are stored in the `logs` directory:

- `application.log` - Contains all logs of level `info` and above
- `error.log` - Contains all logs of level `error` and above

Logs are automatically rotated:
- When they reach 10MB in size
- Daily at midnight
- Up to 14 days of logs are kept for historical analysis

## Viewing Logs

In development, logs are output to the console with colorization and formatting.

In production, you can view logs in the log files in the `logs` directory.

## Adding Logging to New Components

1. Import the appropriate logger:
   ```typescript
   import { PinoConfigService } from '../../logger/pino-config.service';
   // or
   import { Logger } from '@nestjs/common';
   ```

2. Create a logger instance:
   ```typescript
   // For services that need advanced logging features
   constructor(private readonly logger: PinoConfigService) {}
   
   // For simpler components
   private readonly logger = new Logger(YourClassName.name);
   ```

3. Use the logger with appropriate log levels and context information.