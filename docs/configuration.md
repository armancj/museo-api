# Configuration Guide

This document provides a comprehensive guide to all configuration options available in the Museo API application.

## Environment Variables

The application uses environment variables for configuration. These can be set in a `.env` file in the root directory or directly in the environment where the application is running.

### Server Configuration

| Variable | Description | Default | Required |
|----------|-------------|---------|----------|
| `APP_PORT` | The port on which the application will run | `3000` | No |
| `NODE_ENV` | Application environment (development, production, test) | `development` | No |

### Database Configuration

| Variable | Description | Default | Required |
|----------|-------------|---------|----------|
| `DB_URI` | MongoDB connection string | - | Yes |

### JWT Authentication

| Variable | Description | Default | Required |
|----------|-------------|---------|----------|
| `JWT_SECRET` | Secret key used for signing JSON Web Tokens (JWT) | - | Yes |
| `JWT_EXPIRATION_TIME` | Expiration time for JWT tokens (e.g., 300d, 24h, 60m) | - | Yes |
| `JWT_REFRESH_TOKEN_SECRET` | Secret key used for signing refresh tokens | - | Yes |
| `JWT_REFRESH_EXPIRATION_TIME` | Expiration time for refresh tokens (e.g., 1000d, 30d) | - | Yes |

### Email Configuration

| Variable | Description | Default | Required |
|----------|-------------|---------|----------|
| `EMAIL_HOST` | Hostname or IP address of the SMTP server | - | Yes |
| `EMAIL_PORT` | Port number for the SMTP server | `465` | Yes |
| `EMAIL_USER` | Username for email authentication | - | Yes |
| `EMAIL_PASS` | Password for email authentication | - | Yes |
| `EMAIL_FROM` | Email address for the "From" field in outgoing emails | - | Yes |
| `EMAIL_SECURE` | Whether to use TLS when connecting to the SMTP server | `true` | No |

## Environment-Specific Configuration

The application loads different configuration based on the `NODE_ENV` environment variable:

- `development`: Used for local development
- `production`: Used for production deployment
- `test`: Used for running tests

## Example Configuration

Here's an example `.env` file with all required configuration:

```env
# Server Configuration
APP_PORT=5001
NODE_ENV=development

# Database Configuration
DB_URI=mongodb://localhost:27017/museun-bd?retryWrites=true&readPreference=primary

# JWT Configuration
JWT_SECRET=your-jwt-secret-key
JWT_EXPIRATION_TIME=300d
JWT_REFRESH_TOKEN_SECRET=your-refresh-token-secret
JWT_REFRESH_EXPIRATION_TIME=1000d

# Email Configuration
EMAIL_HOST=smtp.example.com
EMAIL_PORT=465
EMAIL_USER=user@example.com
EMAIL_PASS=your-email-password
EMAIL_FROM=noreply@example.com
EMAIL_SECURE=true
```

## Validation

All environment variables are validated when the application starts. If any required variables are missing or have invalid values, the application will fail to start and display an error message.