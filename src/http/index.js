import axios from "axios";
import router from '../router'

const instance = axios.create({
  baseURL: "/api",
  timeout: 1000,
});

// 请求拦截
instance.interceptors.request.use(
  function(config) {
    let token = sessionStorage.getItem("token");
    token && (config.headers.Authorization = token);
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);

// 响应拦截
instance.interceptors.response.use(
  function(response) {
    return response;
  },
  function(error) {
    console.log(error.response)
    if (error.response.status) {
      switch (error.response.status) {
        case 401:
          router.replace({
            path: "/login",
            query: {
              redirect: router.currentRoute.fullPath,
            },
          });
          break;
        case 403:
          // Toast({
          //   message: "登录过期，请重新登录",
          //   duration: 1000,
          //   forbidClick: true,
          // });
          // 清除token
          sessionStorage.removeItem("token");
          // 跳转登录页面，并将要浏览的页面fullPath传过去，登录成功后跳转需要访问的页面
          setTimeout(() => {
            router.replace({
              path: "/login",
              query: {
                redirect: router.currentRoute.fullPath,
              },
            });
          }, 1000);
          break;
        default:
          break;
      }
    }
    return Promise.reject(error);
  }
);

export function get(url, params) {
  return new Promise((resolve, reject) => {
    instance
      .get(url, { params })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.data);
      });
  });
}

export function post(url, data) {
  return new Promise((resolve, reject) => {
    instance
      .post(url, data)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.data);
      });
  });
}

export function upload(url, data) {
  return new Promise((resolve, reject) => {
    instance({
      method: "post",
      url,
      data,
      headers: {
        "content-type": "multipart/form-data",
      },
    })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.data);
      });
  });
}
