import axios from "axios";
import { message } from "antd";
import isUndefined from "lodash/isUndefined";

import { buildQuery } from "../helpers/api.helper";
import i18n from "../i18n";

const BASE_URL = process.env.REACT_APP_API_URL;
const api = axios.create({
  baseURL: BASE_URL,
  withCredentials: true
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const { response } = error;

    if (response.status === 401) {
      // Redirects to login page
      window.location.replace("http://localhost:3000/#/");
      message.error(i18n.t("errors.unauthorized"));
    } else {
      message.error(response?.data?.msg || i18n.t("errors.error_unexpected"));
    }

    return Promise.reject(error);
  }
);

const http = async ({ method = "get", endpoint, params, others, headers }) => {
  const url = !isUndefined(others) ? buildQuery(endpoint, others) : endpoint;

  const { data } = await api({
    url,
    method,
    data: params,
    headers
  });

  return data;
};

export default http;
