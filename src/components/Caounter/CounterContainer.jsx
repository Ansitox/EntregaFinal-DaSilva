import { useState } from "react";
import { Counter } from "./Counter";

export const CounterContainer = ({ initial = 1, stock }) => {
  const [counter, setCounter] = useState(initial);

  const add = () => {
    counter < stock && setCounter(counter + 1);
  };

  const substract = () => {
    counter > 1 && setCounter(counter - 1);
  };

  return (
    <Counter counter={counter} add={add} substract={substract} stock={stock} />
  );
};
