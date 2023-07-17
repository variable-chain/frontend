import axios from "axios";

export const getSocialLinks = () => {
  return axios
    .get(`${process.env.API_BASE_URL}/user/socialLinks`)
    .then((response) => response.data)
    .catch((error) => {
      throw new Error(error.response.data.message || "Something went wrong");
    });
};
