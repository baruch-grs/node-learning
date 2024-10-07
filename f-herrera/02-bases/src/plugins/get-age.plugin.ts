// const getAgePlugin = require("get-age");

export const getAge = (birthdate: string) =>
  new Date().getFullYear() - new Date(birthdate).getFullYear();
