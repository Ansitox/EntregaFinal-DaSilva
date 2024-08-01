import { Button } from "@mui/material";

import "./cartCard.css";
import { LuTrash } from "react-icons/lu";

export const CartCard = ({ item }) => {
  return (
    <div className="cart-item">
      <div className="cart-img-container">
        <img src={item.image} alt={item.name} />
      </div>
      <div className="cart-item-info">
        <p className="cart-item-name">{item.name}</p>
        <p className="cart-item-price">${item.price}</p>
      </div>
      <div className="cart-item-quantity">
        <p className="cart-item-quantity">Cantidad: {item.quantity}</p>
      </div>
      <div className="cart-item-remove">
        <Button variant="contained" sx={{}}>
          <LuTrash color="#f4ee91" size="2vh" />
        </Button>
      </div>
    </div>
  );
};
