import i18n from "../i18n";

export const required = [
  {
    required: true,
    message: i18n.t("validations.mandatory")
  }
];

export const email = [
  {
    type: "email",
    message: i18n.t("validations.email_invalid")
  }
];
