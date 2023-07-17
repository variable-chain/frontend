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
      eth_address,
      nonce,
    } = req.body;

    const apiUrl = "http://localhost:3000/api/v1/variable/l2operation/withdraw";

    const response = await axios.post(apiUrl, {
      tx_id,
      stark_address,
      position_id,
      amount,
      transactionType,
      asset,
      eth_address,
      nonce,
    });

    const withdrawData = response.data;

    return res.status(200).json(withdrawData);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
}
