import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";

import { CartQuantityHandler } from "./CartQuantityHandler";

export const CartQuantityHandlerContainer = ({ quantity, id, stock }) => {
  const [editMode, setEditMode] = useState(false);
  const [inputQuantity, setInputQuantity] = useState(quantity);

  const { editCartItemQuantity } = useContext(CartContext);

  const handleInputChange = (event) => {
    const newValue = event.target.value;
    if (newValue >= 1 && newValue <= stock) {
      setInputQuantity(newValue);
    }
  };

  const changeEditMode = () => setEditMode(!editMode);

  return (
    <CartQuantityHandler
      changeEditMode={changeEditMode}
      editCartItemQuantity={editCartItemQuantity}
      editMode={editMode}
      handleInputChange={handleInputChange}
      id={id}
      inputQuantity={inputQuantity}
    />
  );
};
