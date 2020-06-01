import cookie from "js-cookie";
import { DEFAULT_LANGUAGE } from "~/src/config/static.js";

export default {
  language: {
    isFetching: false,
    locale: cookie.get("language") || DEFAULT_LANGUAGE,
  },
};
