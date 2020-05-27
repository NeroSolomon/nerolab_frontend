import { apiBaseUrl } from "~package.json";

const env =
  process.env.NODE_ENV === "production" ? "production" : "development";
const baseUrl = apiBaseUrl[env];
console.log(baseUrl);

const API_CONFIG = {};

Object.keys(API_CONFIG).forEach((key) => {
  const url = API_CONFIG[key];
  if (0 !== url.indexOf("http")) {
    API_CONFIG[key] = baseUrl + url;
  }
});

export { API_CONFIG };
