

export default () => ({
  database: {
    uri: 'process.env.DB_URI',
  },
  email: {
    from: 'process.env.EMAIL_FROM',
    host: 'process.env.EMAIL_HOST',
    port: 3038,
    user: 'process.env.EMAIL_USER',
    pass:' process.env.EMAIL_PASS',
  }
});
