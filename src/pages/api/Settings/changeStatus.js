import axios from "axios";

export const changeServerMaintenanceStatus = (token, isServerMaintenance) => {
  const formData = new FormData();
  formData.append(
    "isServerMaintenance",
    isServerMaintenance ? "true" : "false"
  );

  return axios
    .put(`${process.env.API_BASE_URL}/setting/changeStatus`, formData, {
      headers: {
        token: token,
        "Content-Type": "multipart/form-data",
      },
    })
    .then((response) => response.data)
    .catch((error) => {
      throw new Error(error.response.data.message || "Something went wrong");
    });
};
