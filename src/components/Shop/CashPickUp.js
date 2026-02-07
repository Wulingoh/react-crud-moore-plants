import useAuth from "../AuthContext";
import { useCart } from "./CartContext";
import { useNavigate, Navigate } from "react-router-dom";
import { Button } from "@mui/material";

export const CashPickUp = () => {
  const { cartItems, total, subtotal, shipping, clearCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  return (
    <Button sx={{
        color: "white",
        backgroundColor: "#102F25",
        border: '1px solid black' ,
        "&:hover": {
          background: "#fff",
          color: "#102F25"
        },
      }}variant="outlined" fullWidth onClick={() =>
        clearCart().then(() => navigate('/confirmation'))
          
    }
     >
        Cash on Pick Up
     </Button>
  );
}