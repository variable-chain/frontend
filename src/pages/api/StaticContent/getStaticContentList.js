import axios from "axios";

export const getStaticContentList = () => {
  return axios
    .get(`${process.env.API_BASE_URL}/static/staticContentList`)
    .then((response) => response.data)
    .catch((error) => {
      throw new Error(error.response.data.message || "Something went wrong");
    });
};
