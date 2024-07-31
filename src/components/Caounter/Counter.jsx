import { useContext } from "react";

import { Button, Input } from "@mui/material";

import { CartContext } from "../../context/CartContext";

import "./counter.css";

export const Counter = ({ counter, add, substract, stock, onAdd, id }) => {
  const { isInCart, cart } = useContext(CartContext);
  const cartProduct = cart.find((product) => product.id === id);

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        onClick={substract}
        disabled={counter <= 1}
      >
        -
      </Button>
      <h2>{counter}</h2>
      <Button
        variant="contained"
        color="primary"
        onClick={add}
        disabled={counter >= stock}
      >
        +
      </Button>
      <Button
        variant="outlined"
        onClick={() => onAdd(counter)}
        disabled={isInCart(id) && cartProduct.quantity === counter}
      >
        {isInCart(id) ? "Editar cantidad" : "Agregar al carrito"}
      </Button>
    </>
  );
};
