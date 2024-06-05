export const config = {
  port: 4000,
  isDebuggingOtp: process.env.IS_DEBUGGING_OTP || false,
  isDebugging: process.env.IS_DEBUGGING || false,

  jwtSecret: process.env.JWT_SECRET,

  encryptionKey: process.env.ENCRYPTION_KEY,
  walletEncryptionKey: process.env.WALLET_ENCRYPTION_KEY,

  // Mongodb.
  mongodb: {
    user: process.env.MONGODB_USER,
    password: process.env.MONGODB_PASSWORD,
    database: process.env.MONGODB_DATABASE,
    host: process.env.MONGODB_HOST,
    port: process.env.MONGODB_PORT,
    debug: process.env.MONGODB_DEBUG || false,
    options: process.env.MONGODB_OPTIONS || '',
  },

  redis: {
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
  },

  app: {
    version: process.env.APP_VERSION || '1.0.0',
  },

  isHapplyHour: process.env.IS_HAPPY_HOUR || false,
};
