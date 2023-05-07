import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  timeout: 1000,
  headers: { "Content-type": "application/json" },
});

//interceptors는 없다해도 무관하다(중간에 가로채서 데이터의 상태를 알려준다)
api.interceptors.request.use(
  function (config) {
    //우리가 보내는 request를 보고싶을때,config를 통해 볼수 있다
    console.log("request start", config);
    return config;
  },
  function (error) {
    //에러가 있다면 여기서 확인할수 있다.
    console.log("request error", error);
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  function (response) {
    //어떤 데이타를 받았는지 확인
    console.log("get response", response);
    return response;
  },
  function (error) {
    //response에 어떤 에러가 있는지 확인
    console.log("response error", error);
    return Promise.reject(error);
  }
);

export default api;
