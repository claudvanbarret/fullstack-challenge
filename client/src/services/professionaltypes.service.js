import http from "./api.service";
import endpoints from "../constants/endpoints";

export const fetchProfessionalTypes = (status) => {
  const others = status !== undefined ? { status } : {};

  return http({
    method: "get",
    endpoint: endpoints.professionaltypes,
    others: others
  });
};

export const saveProfessionalType = (professionalType) => {
  return http({
    method: "post",
    endpoint: endpoints.professionaltypes,
    params: professionalType
  });
};

export const editProfessionalType = (professionalType) => {
  return http({
    method: "put",
    endpoint: endpoints.professionaltypes,
    params: professionalType,
    others: professionalType.id
  });
};

export const removeProfessionalType = (professionalType) => {
  return http({
    method: "delete",
    endpoint: endpoints.professionaltypes,
    others: professionalType.id
  });
};
