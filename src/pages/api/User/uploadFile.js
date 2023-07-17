import axios from "axios";

export const uploadFile = (file, token) => {
  const formData = new FormData();
  formData.append("file", file);

  const headers = {
    "Content-Type": "multipart/form-data",
    token: token,
  };

  return axios
    .post(`${process.env.API_BASE_URL}/user/uploadFile`, formData, { headers })
    .then((response) => response.data)
    .catch((error) => {
      throw new Error(error.response.data.message || "Something went wrong");
    });
};
