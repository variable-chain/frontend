import axios from "axios";

export const editProfile = (token, data) => {
  const formData = new FormData();
  formData.append("name", data.name);
  formData.append("email", data.email);
  formData.append("countryCode", data.countryCode);
  formData.append("mobileNumber", data.mobileNumber);
  formData.append("profilePic", data.profilePic);
  formData.append("coverImage", data.coverImage);

  const headers = {
    "Content-Type": "multipart/form-data",
    token: token,
  };

  return axios
    .put(`${process.env.API_BASE_URL}/user/editProfile`, formData, { headers })
    .then((response) => response.data)
    .catch((error) => {
      throw new Error(error.response.data.message || "Something went wrong");
    });
};
