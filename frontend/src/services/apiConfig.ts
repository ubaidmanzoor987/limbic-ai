import { API_BASE_URL } from "@/constants/api";
import axios from "axios";

const instance = axios.create({
  baseURL: API_BASE_URL,
});

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // console.log(
    //   "Error Response Headers:",
    //   error.response ? error.response.headers : "No response headers"
    // );
    // console.log(
    //   "aaa",
    //   error,
    //   error.message,
    //   JSON.parse(JSON.stringify(error)),
    //   error?.response,
    //   error.status_code
    // );
    if (error.response?.status === 401 || error.message === "Network Error") {
      if (typeof window !== "undefined") {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
      }
      window.location.href = "/login";
    }
  }
);

export default instance;
