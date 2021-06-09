import axios from "axios";
import Cookies from "universal-cookie";

const conf = {
  baseURL: "http://localhost:3000/api/",
};

const httpClient = axios.create(conf);

// const gameServerHttpClient = axios.create({
//   baseURL:
//     process.env.REACT_APP_GAME_SERVER_URL || "http://localhost:3000/api/",
// });

httpClient.interceptors.request.use((config) => {
  // const cookies = new Cookies();
  // const token = cookies.get("Bearer");
  config.headers = {
    Accept: `application/json`,
  };

  // TODO: Remove URL token exclusion
  //   if (token && config.url !== "api/users/invite/confirm") {
  //     config.headers["Authorization"] = token;
  //   }
  return config;
});

httpClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log("AXIOS_ERROR: ", error);

    // if (
    //   process.browser &&
    //   401 === error.response?.status &&
    //   !window.location.pathname.includes("login")
    // ) {
    //   console.log("NOT_AUTHENTICATED");
    //   window.location.href = `/auth/login?redirect=${encodeURIComponent(
    //     window.location.pathname + window.location.search
    //   )}`;
    // }

    // if (401 === error.response?.status) {
    //     window.location.replace('/login')
    // }

    throw error;
    return error;
  }
);

// export const setupInterceptors = (store?: RootStore) => {
//
//     httpClient.interceptors.response.use( (response: AxiosResponse<any>) => {
//         return response;
//     }, (error: AxiosError) => {
//         console.log('AXIOS_ERROR: ', error)
//
//         if (401 === error.response?.status) {
//             window.location.replace('/authentication/login')
//         }
//
//
//     })
// }
//
// setupInterceptors()

export { httpClient };
