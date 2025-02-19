import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Product({ id, productName, quantity, price }) {
  const navigate = useNavigate();

  return (
    <tr
      onClick={() => navigate(`/product/${id}`)}
      style={{ cursor: 'pointer', border: "1px solid black" }}
    >
      <td style={{ padding: "8px" }}>{id}</td>
      <td style={{ padding: "8px" }}>{productName}</td>
      <td style={{ padding: "8px" }}>{quantity}</td>
      <td style={{ padding: "8px" }}>{price}</td>
    </tr>
  );
}
