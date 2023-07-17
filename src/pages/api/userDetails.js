import axios from "axios";
export default async function handler(req, res) {
  try {
    const { eth_address, stark_address } = req.body;

    // To Check if either 'eth_address' or 'stark_address' is provided
    if (!eth_address && !stark_address) {
      return res
        .status(400)
        .json({ message: "eth_address or stark_address is required" });
    }

    const apiUrl = "http://localhost:3000/api/v1/variable/user/details";

    const response = await axios.get(apiUrl, {
      params: {
        eth_address,
        stark_address,
      },
    });

    const userDetails = response.data;

    return res.status(200).json(userDetails);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
}
