import React, { useState } from "react";

export const CurrencyChange = () => {
  const [currency, setCurrency] = useState("NZD");

  return (
    <>
      <select value={currency} onChange={({ target: { value } }) => setCurrency(value)}>
        <option value="NZD">New Zealand dollar</option>
        <option value="USD">United States dollar</option>
        <option value="EUR">Euro</option>
      </select>
    </>
  );
};
export default CurrencyChange;
