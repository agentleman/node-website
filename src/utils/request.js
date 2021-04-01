import Vue from "vue";
import { Message, MessageBox, Loading } from "element-ui";
import store from "../store";
import axios from "axios";

const service = axios.create({
  //   baseUrl: "",
  timeout: 5000,
  //   headers: { "X-Custom-Header": "foobar" },
  withCredentials: false, //跨域请求不需要凭证
});

service.interceptors.request.use((config) => {
  config.headers["X-CSRF-TOKEN"] = sessionStorage.getItem("tocken");
  return config;
});
service.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    let msg = "未知错误，请刷新页面或重新登录";
    if (error.code === "ECONNABORTED") {
      msg = "请求时间超过，已超时取消";
    }
    if (error && error.response) {
      switch (error.response.status) {
        case 400:
          msg = "请求错误";
          break;
        case 401:
          msg = "未授权，请登录";
          break;
        case 402:
          msg = "拒绝访问";
          break;
        case 404:
          msg = "请求地址出错";
          break;
        case 408:
          msg = "请求超时";
          break;
        case 500:
          msg = "服务器内部错误";
          break;
        case 501:
          msg = "服务未实现";
          break;
        case 502:
          msg = "网关错误";
          break;
        case 503:
          msg = "服务不可用";
          break;
        case 504:
          msg = "网关超时";
          break;
        case 505:
          msg = "HTTP版本不受支持";
          break;
        default:
      }
    }
    Vue.prototype.$message({
      message: msg,
      type: "error",
      showClose: false,
    });
    console.log("error");
  }
);

export default service;
