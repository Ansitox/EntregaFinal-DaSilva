import { Button, Input } from "@mui/material";

import "./counter.css";

export const Counter = ({ counter, add, substract, stock, onAdd }) => {
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
      <Button variant="outlined" onClick={() => onAdd(counter)}>
        Agregar al carrito
      </Button>
    </>
  );
};
