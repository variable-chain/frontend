import axios from "axios";

export default async function handler(req, res) {
  try {
    const { userId, asset } = req.body;

    // To Check if both 'userId' and 'asset' are provided
    if (!userId || !asset) {
      return res.status(400).json({ message: "userId and asset are required" });
    }

    const apiUrl = "http://localhost:3000/api/v1/variable/user/balance";

    const response = await axios.get(apiUrl, {
      params: {
        userId,
        asset,
      },
    });

    const balanceData = response.data;

    return res.status(200).json(balanceData);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
}
