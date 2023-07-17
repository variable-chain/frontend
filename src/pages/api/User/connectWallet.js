import axios from "axios";

export const connectWallet = (walletAddress) => {
  const url = `${process.env.API_BASE_URL}/user/connectWallet`;
  const body = {
    walletAddress: walletAddress,
  };
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  return axios
    .post(url, body, config)
    .then((response) => response.data)
    .catch((error) => {
      throw new Error(error.response.data.message || "Something went wrong");
    });
};
