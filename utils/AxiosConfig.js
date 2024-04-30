import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_BASE_URL;

console.log(BASE_URL, " ===base_url:axios:config");

const MyAxios = axios.create({ 
  baseURL: BASE_URL,
});

MyAxios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
    // console.log(token, " = token in MyAxios:Config");
    if (token) {
        // config.headers["Content-Type"] = "application/json"
      config.headers.Authorization = "Bearer " + token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

MyAxios.interceptors.response.use(
  (response) => {
    // handle success
    return response;
  },
  (error) => {
    // if (error.response.status === 401 || error.response.status === 403) {
      // window.localStorage.removeItem("accessToken");
      // window.localStorage.removeItem("refreshToken");
    //   window.location.href = "/signin";
    // } else {
    //   console.log(error.response, " error.response");
    // }

    return Promise.reject(error);
  }
);

export default MyAxios;
