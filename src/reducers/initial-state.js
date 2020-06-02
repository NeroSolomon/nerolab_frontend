import cookie from "js-cookie";
import { DEFAULT_LANGUAGE } from "~/src/config/static.js";

export default {
  language: {
    isFetching: true,
    locale: cookie.get("language") || DEFAULT_LANGUAGE,
  },
};
