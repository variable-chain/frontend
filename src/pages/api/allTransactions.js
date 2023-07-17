import axios from "axios";
export default async function handler(req, res) {
  try {
    const apiUrl = "http://localhost:3000/api/v1/variable/transaction/all";

    const response = await axios.get(apiUrl);

    const allTransactionsData = response.data;

    return res.status(200).json(allTransactionsData);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
}
