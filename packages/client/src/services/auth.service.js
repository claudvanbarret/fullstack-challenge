import http from "./api.service";
import endpoints from "../constants/endpoints";

export const logout = () =>
  http({
    method: "get",
    endpoint: endpoints.logout
  });

export const getUser = () =>
  http({
    method: "get",
    endpoint: endpoints.user
  });
