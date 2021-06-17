import http from "./api.service";
import endpoints from "../constants/endpoints";

export const logout = () => {
  return http({
    method: "get",
    endpoint: endpoints.logout
  });
};

export const getUser = () => {
  return http({
    method: "get",
    endpoint: endpoints.user
  });
};
