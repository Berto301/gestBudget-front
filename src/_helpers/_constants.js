/*constants*/
export const STRONG_PASSWORD_REGEX = new RegExp(
  "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{6,})"
);

export const ERROR = "error";
export const SUCCESS = "success";
export const NUMBER_CHARACTER = 60;