import axios from "axios";

export const editStaticContent = async (contentId, title, description) => {
  try {
    const body = {
      _id: contentId,
      title,
      description,
    };

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await axios.put(
      `${process.env.API_BASE_URL}/static/staticContent`,
      body,
      config
    );

    return response.data;
  } catch (error) {
    console.error("Error:", error);
    // Handle error as needed
    throw error;
  }
};
