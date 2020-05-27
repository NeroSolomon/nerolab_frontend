import axios from "axios";
import qs from "qs";
import { API_CONFIG } from "src/config/api.js";

// 允许跨域请求带上cookie
axios.defaults.withCredentials = true;

// 默认请求
const requestConfig = {
  defaultHeaders: {},
  defaultsParams: {},
  expired: undefined,
};

export function cfetch(urlKey, options, jsonFormat) {
  let { method, headers, params } = options || {};

  method = method || "GET";
  headers = Object.assign({}, headers, requestConfig.defaultHeaders);
  const opts = { method, headers };
  const data = Object.assign({}, params, requestConfig.defaultsParams);

  if ("POST" === method) {
    // POST
    if (jsonFormat) {
      // 以json格式上传
      opts.headers["Content-Type"] = "application/json; charset=utf-8";
      opts.data = JSON.stringify(data);
    } else {
      // 普通form表单上传
      opts.headers["Content-Type"] =
        "application/x-www-form-urlencoded; charset=utf-8";
      opts.data = qs.stringify(data);
    }
  } else if ("GET" === method) {
    opts.params = data;
  }

  return axios(API_CONFIG[urlKey], opts);
}
