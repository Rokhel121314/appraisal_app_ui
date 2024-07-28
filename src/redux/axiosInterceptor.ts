import axios, { AxiosInstance, AxiosResponse } from "axios";

const URL = import.meta.env.VITE_BASE_URL;

const axiosInstance: AxiosInstance = axios.create({
  baseURL: URL,
});

axiosInstance.interceptors.response.use(
  async (response: AxiosResponse) => {
    // no error 401
    return response;
  },

  //   if error
  async (error) => {
    if (error.response && error.response.status === 401) {
      try {
        // calling the refresh token
        await axiosInstance.get("/user/renew", {
          withCredentials: true,
        });

        console.log("refresh api called");

        // recalling original request
        return axiosInstance.request(error.config);
      } catch (refreshError) {
        console.error("error refresh token");
        // redirect to log in
      }
    }
    console.log("TOKEN ERROR");
    return Promise.reject(error);
  }
);

export default axiosInstance;
