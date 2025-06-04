import { registerAs } from '@nestjs/config';

/**
 * Development environment configuration
 * These values are used when NODE_ENV is set to 'development'
 */
export default registerAs('development', () => ({
  app: {
    port: parseInt(process.env.APP_PORT ?? '3000', 10),
    hostname: process.env.APP_HOST || 'localhost',
  },
  database: {
    uri: process.env.DB_URI,
  },
  jwt: {
    secret: process.env.JWT_SECRET,
    expirationTime: process.env.JWT_EXPIRATION_TIME,
    refreshSecret: process.env.JWT_REFRESH_TOKEN_SECRET,
    refreshExpirationTime: process.env.JWT_REFRESH_EXPIRATION_TIME,
  },
  email: {
    host: process.env.EMAIL_HOST,
    port: parseInt(process.env.EMAIL_PORT ?? '465', 10),
    secure: process.env.EMAIL_SECURE === 'true',
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
    from: process.env.EMAIL_FROM,
  },
}));
