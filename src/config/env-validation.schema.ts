import * as Joi from 'joi';

/**
 * Validation schema for environment variables
 * This schema ensures that all required environment variables are present and have the correct type
 */
export const validationSchema = Joi.object({
  // Database
  DB_URI: Joi.string().required().description('MongoDB connection string'),

  // Application
  APP_PORT: Joi.number()
    .default(3000)
    .description('Port on which the application will run'),
  NODE_ENV: Joi.string()
    .valid('development', 'production', 'test')
    .default('development')
    .description('Application environment'),

  // JWT Authentication
  JWT_SECRET: Joi.string()
    .required()
    .description('Secret key used for signing JSON Web Tokens (JWT)'),
  JWT_EXPIRATION_TIME: Joi.string()
    .required()
    .description('Expiration time for JWT tokens (e.g., 300d, 24h, 60m)'),
  JWT_REFRESH_TOKEN_SECRET: Joi.string()
    .required()
    .description('Secret key used for signing refresh tokens'),
  JWT_REFRESH_EXPIRATION_TIME: Joi.string()
    .required()
    .description('Expiration time for refresh tokens (e.g., 1000d, 30d)'),

  // Email
  EMAIL_HOST: Joi.string()
    .required()
    .description('Hostname or IP address of the SMTP server'),
  EMAIL_PORT: Joi.number()
    .required()
    .description('Port number for the SMTP server'),
  EMAIL_USER: Joi.string()
    .required()
    .description('Username for email authentication'),
  EMAIL_PASS: Joi.string()
    .required()
    .description('Password for email authentication'),
  EMAIL_FROM: Joi.string()
    .required()
    .email()
    .description('Email address for the "From" field in outgoing emails'),
  EMAIL_SECURE: Joi.boolean()
    .default(true)
    .description('Whether to use TLS when connecting to the SMTP server'),
});
