import { PayPalButtons } from "@paypal/react-paypal-js";
import axios from "axios";
import useAuth from "../AuthContext";
import { useCart } from "./CartContext";
import { useNavigate } from "react-router-dom";

export const PayPal = () => {
  const { cartItems, total, subtotal, shipping, clearCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  return (
    <PayPalButtons
      forceReRender={[total]}
      style={{ layout: "horizontal" }}
      createOrder={(data, actions) => {
        return actions.order.create({
          purchase_units: [
            {
              items: cartItems.map((item) => ({
                name: item.title,
                unit_amount: { value: item.price, currency_code: "NZD" },
                quantity: item.itemQuantity,
              })),
              amount: {
                value: total,
                currency_code: "NZD",
                breakdown: {
                  item_total: { value: subtotal, currency_code: "NZD" },
                  shipping: { value: shipping, currency_code: "NZD" },
                },
              },
            },
          ],
        });
      }}
      onApprove={(data, actions) => {
        return actions.order.capture().then((details) => {
          const { email_address } = details.payer;
          const { address, name } = details.purchase_units[0].shipping;
          axios.post(`/api/customer/orders`, {
            status: "Paid",
            user_id: user.userId,
            name: name.full_name,
            email: email_address,
            line_1: address.address_line_1,
            line_2: address.address_line_2,
            city: address.admin_area_2,
            region: address.admin_area_1,
            country: address.country_code,
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
          
        });
      }}
    />
  );
};
