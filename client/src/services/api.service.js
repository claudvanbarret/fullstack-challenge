import axios from "axios";
import { message } from "antd";
import isUndefined from "lodash/isUndefined";

import { buildQuery } from "../helpers/api.helper";

const BASE_URL = process.env.REACT_APP_API_URL;
const api = axios.create({
  baseURL: BASE_URL
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const { response } = error;
    message.error(response.data.msg || "Erro inesperado");
    return Promise.reject(error);
  }
);

const http = async ({ method = "get", endpoint, params, others, headers }) => {
  const url = !isUndefined(others) ? buildQuery(endpoint, others) : endpoint;

  const { data } = await api({
    url,
    method,
    data: params instanceof FormData ? params : { ...params },
    headers
  });

  return data;
};

export default http;
