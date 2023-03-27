import _axios from "axios"
import TokenService from './TokenService.js';

const axios = (baseURL) => {
    const instance = _axios.create({
            baseURL: 'https://event-app.01tech.hk/apis/',
            timeout: 9000,
            responseType: 'json',
            responseEncoding: 'utf8',
            withCredentials: true,
            xsrfCookieName: 'XSRF-TOKEN',
            xsrfHeaderName: 'X-XSRF-TOKEN',
            headers: {
              'Content-Type': 'application/json',
              "Access-Control-Allow-Origin": "*"
            },
        });
        instance.interceptors.request.use(
          (config) => {
            const token = TokenService.getToken();
            if (token) {
              config.headers["Authorization"] = 'Bearer ' + token;  // for Spring Boot back-end
              // config.headers["x-access-token"] = token; // for Node.js Express back-end
            }
            return config;
          },
          (error) => {
            return Promise.reject(error);
          }
        );
     return instance;
}


export {axios};
export default axios();
