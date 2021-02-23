import axios from "axios";

const instance = axios.create({
  baseURL: "/api",
  timeout: 1000,
});

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
