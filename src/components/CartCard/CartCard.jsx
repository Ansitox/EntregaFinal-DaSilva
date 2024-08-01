import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

import { Button } from "@mui/material";
import { LuTrash } from "react-icons/lu";

import { CartQuantityHandlerContainer } from "../CartQuantityHandler/CartQuantityHandlerContainer";

import "./cartCard.css";

export const CartCard = ({ item }) => {
  const { deleteItem } = useContext(CartContext);
  return (
    <div className="cart-item">
      <div className="cart-img-container">
        <img src={item.image} alt={item.name} />
      </div>
      <div className="cart-item-info">
        <p className="cart-item-name">{item.name}</p>
        <p className="cart-item-price">${item.price}</p>
      </div>
      <div className="cart-item-actions">
        <CartQuantityHandlerContainer
          quantity={item.quantity}
          id={item.id}
          stock={item.stock}
        />
        <Button
          variant="contained"
          onClick={() => {
            deleteItem(item.id);
          }}
        >
          <LuTrash color="#f4ee91" size="2vh" />
        </Button>
      </div>
    </div>
  );
};
