import axios from "axios";
import qs from "qs";
import { API_CONFIG } from "~/src/config/api.js";

// 允许跨域请求带上cookie
axios.defaults.withCredentials = true;

// 默认请求
const requestConfig = {
  defaultHeaders: {},
  defaultsParams: {},
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

  return axios(API_CONFIG[urlKey], opts)
    .then(parseJson)
    .then(checkAccessError)
    .catch(handleError);
}

// 处理返回数据
function parseJson(res) {
  return {
    jsonResult: res.data,
    status: res.status,
    statusText: res.statusText,
    url: res.config.url,
  };
}

// 针对处理后的数据再分情况处理
function checkAccessError(res) {
  let {
    status,
    url,
    jsonResult: { code },
  } = res;
  if (404 === status) {
    return Promise.reject(`${res.status} ${res.statusText}`);
  } else if (200 === status) {
    // 接口请求返回成功，但api返回的状态码不为200
    // 并且这个接口是auth接口
    // 证明没有登录
    if (200 !== code && -1 < url.indexOf(API_CONFIG.auth)) {
      alert("请重新登录");
      return Promise.reject(`${res.status} ${res.statusText}`);
    }
  } else {
    // 网络错误
    alert("网络错误");
    return Promise.reject(`${res.status} ${res.statusText}`);
  }
  return res;
}

// 处理reject和错误
function handleError(error) {
  let oErr = {};
  console.log("Request Failed", error);
  if (undefined === error.status && "Network Error" === error.message) {
    // Network Error
    oErr = {
      jsonResult: {
        code: 502,
        message: "网络错误",
      },
    };
  } else if (!error.response) {
    // 针对取消请求的情况
    oErr = {
      jsonResult: {
        code: -1,
        message: error,
      },
    };
  } else {
    // 针对返回错误
    oErr = {
      jsonResult: {
        code: 500,
        message: error.response.statusText || error.response.data,
      },
    };
  }
  return oErr;
}
