import { Payload } from '../apps/hodl20/src/auth';

export declare global {
  type AnyObject = Record<string, unknown>;

  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: string;
      PORT: string;
      DATA_PORT: string;
      BASE_URL: string;

      DB_TYPE: string;
      DB_HOST: string;
      DB_PORT: string;
      DB_USER: string;
      DB_PASSWORD: string;
      DB_NAME: string;

      REDIS_HOST: string;
      REDIS_PORT: string;

      APP_VERSION: string;
      APP_PRICE: string;
      APP_LIMIT_PER_WALLET: string;
      APP_CURRENCY_ADDRESS: string;
      APP_ALLOWLIST_PROOF: string;
      APP_PROOF_PRICE_PER_TOKEN: string;
      APP_PROOF_CURRENCY_ADDRESS: string;

      JWT_SECRET: string;
      JWT_VERIFICATION_TOKEN_SECRET: string;
      JWT_VERIFICATION_EXPIRATION_TIME: string;

      CLIENT_VERIFY_URL: string;
      CLIENT_FORGOT_PASSWORD_URL: string;

      MONGODB_USER: string;
      MONGODB_PASSWORD: string;
      MONGODB_DATABASE: string;
      MONGODB_HOST: string;
      MONGODB_PORT: string;
      MONGODB_DEBUG: string;
      MONGODB_OPTIONS: string;

      MORALIS_API_KEY: string;

      TOKEN_CONTRACT_ADDRESS: string;

      AWS_ACCESS_KEY_ID: string;
      AWS_SECRET_ACCESS_KEY: string;
      AWS_REGION: string;
      AWS_PUBLIC_BUCKET_NAME: string;

      EMAIL_CONFIRMATION_URL: string;
      API_DATA_BASE_URL: string;

      MOCK_OWNER_IDS: string;

      SESSION_SECRET: string;

      IS_DEBUGGING_OTP: string;
      IS_DEBUGGING: string;
      IS_HAPPY_HOUR: string;

      TELEGRAM_CHANNEL_ID: string;
      TELEGRAM_LOG_CHANNEL_ID: string;
      TELEGRAM_CHANNEL_TOKEN: string;
      TELEGRAM_BOT_LINK: string;
      TELEGRAM_GAME_URL: string;
      TELEGRAM_GAME_AUTH_URL: string;
      TELEGRAM_GAME_SHORT_NAME: string;

      NODE_RPC_URL: string;
      NETWORK_NAME: string;

      ENCRYPTION_KEY: string;
      WALLET_ENCRYPTION_KEY: string;

      CRON_JOB_TIME_CHEATER_CHECKER: string;

      REFERRAL_REWARD_RATE: string;
    }
  }

  namespace Express {

    namespace Multer {
      /** Object containing file metadata and access information. */
      interface File {
        /** Name of the form field associated with this file. */
        fieldname: string;
        /** Name of the file on the uploader's computer. */
        originalname: string;
        /**
           * Value of the `Content-Transfer-Encoding` header for this file.
           * @deprecated since July 2015
           * @see RFC 7578, Section 4.7
           */
        encoding: string;
        /** Value of the `Content-Type` header for this file. */
        mimetype: string;
        /** Size of the file in bytes. */
        size: number;
        /**
           * A readable stream of this file. Only available to the `_handleFile`
           * callback for custom `StorageEngine`s.
           */
        stream: Readable;
        /** `DiskStorage` only: Directory to which this file has been uploaded. */
        destination: string;
        /** `DiskStorage` only: Name of this file within `destination`. */
        filename: string;
        /** `DiskStorage` only: Full path to the uploaded file. */
        path: string;
        /** `MemoryStorage` only: A Buffer containing the entire file. */
        buffer: Buffer;
      }
    }


    interface Request {
      id: string;
    }
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface User extends Payload {}
  }

  export interface GoogleUserinfo {
    /**
     * The user's email address.
     */
    email?: string | null;
    /**
     * The user's last name.
     */
    family_name?: string | null;
    /**
     * The user's gender.
     */
    gender?: string | null;
    /**
     * The user's first name.
     */
    given_name?: string | null;
    /**
     * The hosted domain e.g. example.com if the user is Google apps user.
     */
    hd?: string | null;
    /**
     * The obfuscated ID of the user.
     */
    id?: string | null;
    /**
     * URL of the profile page.
     */
    link?: string | null;
    /**
     * The user's preferred locale.
     */
    locale?: string | null;
    /**
     * The user's full name.
     */
    name?: string | null;
    /**
     * URL of the user's picture image.
     */
    picture?: string | null;
    /**
     * Boolean flag which is true if the email address is verified. Always verified because we only return the user's primary email address.
     */
    verified_email?: boolean | null;
  }
}
