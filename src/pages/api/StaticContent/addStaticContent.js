import axios from "axios";

export const addStaticContent = async (type, title, description) => {
  const data = {
    type,
    title,
    description,
  };
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const response = await axios.post(
      `${process.env.API_BASE_URL}/static/staticContent`,
      data,
      config
    );
    return response.data; // Return the response data
  } catch (error) {
    throw new Error(error.response.data); // Throw an error with the response data
  }
};
