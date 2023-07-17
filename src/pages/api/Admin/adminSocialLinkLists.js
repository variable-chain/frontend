import axios from "axios";

export const getSocialLinkList = (token) => {
  return axios
    .get(`${process.env.API_BASE_URL}/admin/socialLinkList`, {
      headers: {
        token: token,
      },
    })
    .then((response) => response.data)
    .catch((error) => {
      throw new Error(error.response?.data?.message || "Something went wrong");
    });
};
