import axios from "axios";

export const getProfile = (token) => {
  const config = {
    headers: {
      token: token,
    },
  };

  return axios
    .get(`${process.env.API_BASE_URL}/user/getProfile`, config)
    .then((response) => response.data)
    .catch((error) => {
      throw new Error(error.response.data.message || "Something went wrong");
    });
};
