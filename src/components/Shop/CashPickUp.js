import axios from "axios";
import useAuth from "../AuthContext";
import { useCart } from "./CartContext";
import { useNavigate, useHistory, Navigate } from "react-router-dom";
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
        axios.post(`/api/customer/orders`, {
            status: "Cash",
            user_id: user.userId,
            name: user.name,
            email: user.email,
            items: cartItems.map((item) => ({
              product_id: item.product_id,
              quantity: item.itemQuantity,
              price: item.price,
            })),
            shipping,
            subtotal,
            total,
            tax: 0,
          }).then(clearCart).then(() => navigate('/confirmation'))
          
    }
     >
        Cash on Pick Up
     </Button>
  );
}