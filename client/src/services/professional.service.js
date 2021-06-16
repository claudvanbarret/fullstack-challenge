import http from "./api.service";
import endpoints from "../constants/endpoints";

export const fetchProfessionals = () => {
  return http({
    method: "get",
    endpoint: endpoints.professionals
  });
};

export const saveProfessional = (professional) => {
  return http({
    method: "post",
    endpoint: endpoints.professionals,
    params: professional
  });
};

export const editProfessional = (professional) => {
  return http({
    method: "put",
    endpoint: endpoints.professionals,
    params: professional
  });
};

export const removeProfessional = (professional) => {
  return http({
    method: "delete",
    endpoint: endpoints.professionals,
    others: professional.id
  });
};
