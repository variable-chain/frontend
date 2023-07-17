import axios from "axios";

export const adminLogin = (email, password) => {
  const requestBody = {
    email: email,
    password: password,
  };

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  return axios
    .post(`${process.env.API_BASE_URL}/admin/login`, requestBody, config)
    .then((response) => response.data)
    .catch((error) => {
      throw new Error(error.response.data.message || "Something went wrong");
    });
};
