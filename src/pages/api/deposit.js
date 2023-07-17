import axios from "axios";
export default async function handler(req, res) {
  try {
    const {
      tx_id,
      stark_address,
      position_id,
      amount,
      transactionType,
      asset,
    } = req.body;

    const apiUrl = "http://localhost:3000/api/v1/variable/l2operation/deposit";

    const response = await axios.post(apiUrl, {
      tx_id,
      stark_address,
      position_id,
      amount,
      transactionType,
      asset,
    });

    const depositData = response.data;

    return res.status(200).json(depositData);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
}
