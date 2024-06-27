
// Extends process.evv
// ========================

declare namespace NodeJS {
    interface ProcessEnv {
      PORT: string;
      MONGO_URI: string;
      SECRET: string;
    }
  }