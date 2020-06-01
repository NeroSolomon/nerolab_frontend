import cookie from "js-cookie";
import {
  LANGUAGE_REQUEST,
  LANGUAGE_SUCCESS,
  LANGUAGE_FAILURE,
  LANGUAGE_REUSE,
} from "~/src/constants/action-type.js";

export function requestLanguage() {
  return {
    type: LANGUAGE_REQUEST,
  };
}

export function receiveLanguage(appLocale) {
  const { key } = appLocale;
  cookie.set("language", key, { expires: 365 });

  return {
    type: LANGUAGE_SUCCESS,
    locale: key,
    data: appLocale,
  };
}

export function rejectLanguage(error) {
  return {
    type: LANGUAGE_FAILURE,
    error,
  };
}

export function reuseLanguage(appLocale) {
  return {
    ...receiveLanguage(appLocale),
    type: LANGUAGE_REUSE,
  };
}

export function changeLanguage(key) {
  return (dispatch, getState) => {
    const { language } = getState();
    const appLocale = language[key];
    if (appLocale) {
      dispatch(reuseLanguage(appLocale));
    } else {
      dispatch(requestLanguage());

      if ("cn" === key) {
        import(/* webpackChunkName: "locale-cn" */ "~/src/locales/cn.js").then(
          (res) => {
            console.log(res);
          }
        );
      } else {
        import(/* webpackChunkName: "locale-en" */ "~/src/locales/en.js").then(
          (res) => {
            console.log(res);
          }
        );
      }
    }
  };
}
