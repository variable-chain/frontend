import axios from "axios";
export default async function handler(req, res) {
  try {
    const { tx_id } = req.body;

    // To Check if 'tx_id' is provided
    if (!tx_id) {
      return res.status(400).json({ message: "tx_id is required" });
    }

    const apiUrl =
      "http://localhost:3000/api/v1/variable/transaction/getTransaction";

    const response = await axios.get(apiUrl, {
      params: {
        tx_id,
      },
    });

    const transactionData = response.data;

    return res.status(200).json(transactionData);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
}
