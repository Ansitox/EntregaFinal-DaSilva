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
        onClick={substract}
        disabled={counter <= 1}
        sx={{ minWidth: "30px", maxWidth: "30px" }}
      >
        -
      </Button>
      <h2 className="counter">{counter}</h2>
      <Button
        variant="contained"
        onClick={add}
        disabled={counter >= stock}
        sx={{ minWidth: "30px", maxWidth: "30px" }}
      >
        +
      </Button>
      <Button
        variant="contained"
        onClick={() => onAdd(counter)}
        disabled={isInCart(id) && cartProduct.quantity === counter}
        sx={{ paddingLeft: "10px" }}
      >
        {isInCart(id) ? "Editar cantidad" : "Agregar al carrito"}
      </Button>
    </>
  );
};

// sx={{
//   backgroundColor: "#3E8A53",
//   padding: "2px 5px",
//   border: "1px solid #3E8A53",
//   borderRadius: "5px",
//   color: "white",
// }}
