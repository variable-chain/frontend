import axios from "axios";
export default async function handler(req, res) {
  try {
    const { type } = req.body;

    // To Check if 'type' is provided
    if (!type) {
      return res.status(400).json({ message: "type is required" });
    }

    const apiUrl = "http://localhost:3000/api/v1/variable/order/match-order";

    const response = await axios.post(apiUrl, {
      type,
    });

    const sellData = response.data;

    return res.status(200).json(sellData);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
}
