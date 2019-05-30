const config = {
  apiServer: {
    development: "http://localhost:3000",
    production: "https://api.tripfixed.com"
  },
  appServer: {
    development: "https://app.tripfixed.com",
    production: "https://app.tripfixed.com"
  }
};

const env = process.env.NODE_ENV || "development";

export const appUrl = config.appServer[env];
export const apiUrl = config.apiServer[env];
