import { AxiosError, AxiosRequestConfig } from "axios";
import axios from "./apiConfig";

import { REQUEST_HEADERS } from "@/constants/api";

import { IRequestBody } from "./service.types";

export const postRequest = (
  url: string,
  body: IRequestBody | any,
  config?: AxiosRequestConfig
) => {
  return axios.post(url, body, {
    ...config,
    headers: {
      ...REQUEST_HEADERS,
      ...config?.headers,
    },
  });
};

export const putRequest = (
  url: string,
  body: IRequestBody | any,
  config?: AxiosRequestConfig
) => {
  return axios.put(url, body, {
    ...config,
    headers: {
      ...REQUEST_HEADERS,
      ...config?.headers,
    },
  });
};

export const getRequest = (
  url: string,
  params?: string | any,
  config?: AxiosRequestConfig
) => {
  let strParams;
  if (typeof params === "number") {
    strParams = params.toString();
  }
  let routeUrl = url;
  if (params && params.length > 0) {
    routeUrl = routeUrl + params;
  }
  if (strParams && strParams.length > 0) {
    routeUrl = routeUrl + strParams;
  }
  return axios.get(routeUrl, {
    ...config,
    headers: {
      ...REQUEST_HEADERS,
      ...config?.headers,
    },
  });
};

export const deleteRequest = (
  url: string,
  params?: string | any,
  config?: AxiosRequestConfig
) => {
  let routeUrl = url;
  if (params && params.length > 0) {
    routeUrl = routeUrl + params;
  }
  return axios.delete(routeUrl, {
    ...config,
    headers: {
      ...REQUEST_HEADERS,
      ...config?.headers,
    },
  });
};

export const patchRequest = (
  url: string,
  body: IRequestBody | any,
  config?: AxiosRequestConfig
) => {
  return axios.patch(url, body, {
    ...config,
    headers: {
      ...REQUEST_HEADERS,
      ...config?.headers,
    },
  });
};

export const getErrorMessage = (json: AxiosError) => {
  return json?.response?.data?.message
    ? json?.response?.data?.message
    : json?.response?.data?.errors.length
    ? json?.response?.data?.errors
    : "Error while processing your request";
};
