import axios from "axios";

export default async function handler(req, res) {
  try {
    const {
      amount_collateral,
      amount_fee,
      amount_synthetic,
      asset_id_collateral,
      asset_id_synthetic,
      expiration_timestamp,
      is_buying_synthetic,
      nonce,
      order_type,
      position_id,
      public_key,
      type,
      status,
      stark_key,
    } = req.body;

    const apiUrl = "http://localhost:3000/api/v1/variable/order/buy";

    const response = await axios.post(apiUrl, {
      amount_collateral,
      amount_fee,
      amount_synthetic,
      asset_id_collateral,
      asset_id_synthetic,
      expiration_timestamp,
      is_buying_synthetic,
      nonce,
      order_type,
      position_id,
      public_key,
      type,
      status,
      stark_key,
    });

    const buyData = response.data;

    return res.status(200).json(buyData);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
}
