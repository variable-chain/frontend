import axios from "axios";

export default async function handler(req, res) {
  try {
    const apiUrl = "http://localhost:3000/api/v1/variable/funding/all";

    const response = await axios.get(apiUrl);

    const fundingData = response.data;

    return res.status(200).json(fundingData);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
}
