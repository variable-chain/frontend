import axios from "axios";

export const viewStaticContentByType = async (type) => {
  try {
    const response = await axios.get(
      `${process.env.API_BASE_URL}/static/staticContent`,
      {
        params: { type },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error:", error);
    // Handle error as needed
    throw error;
  }
};
