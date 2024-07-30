import { Button, Input } from "@mui/material";

import "./counter.css";

export const Counter = ({ counter, add, substract, stock }) => {
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
    </>
  );
};
