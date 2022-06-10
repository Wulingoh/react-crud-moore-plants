import React, { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import AddressForm from "./AddressForm";
import PaymentForm from "./PaymentForm";
import Review from "./Review";
import usePayPalScriptReducer from "@paypal/react-paypal-js";


export const CurrencyChange = () => {
  const [{ options }, dispatch] = usePayPalScriptReducer();
  const [currency, setCurrency] = useState(options.currency);
  
  const onCurrencyChange = ({ target: { value } }) => {
    setCurrency(value);
    dispatch({
        type: "resetOptions",
        value: {
            ...options,
            currency: value,
        },
    });
}

  return (
    <>
      <select value={currency} onChange={onCurrencyChange}>
        <option value="USD">United States dollar</option>
        <option value="EUR">Euro</option>
      </select>
    </>
  );
};
export default CurrencyChange;
