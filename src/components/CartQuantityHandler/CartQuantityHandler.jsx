import { Button, Input } from "@mui/material";
import { RiEdit2Line } from "react-icons/ri";
import { FaCheck } from "react-icons/fa6";

export const CartQuantityHandler = ({
  changeEditMode,
  editCartItemQuantity,
  editMode,
  handleInputChange,
  id,
  inputQuantity,
}) => {
  return (
    <>
      <Input
        type="number"
        value={inputQuantity}
        disabled={!editMode}
        onChange={handleInputChange}
      />
      <Button
        variant="contained"
        onClick={() => {
          if (!editMode) {
            changeEditMode();
          } else {
            editCartItemQuantity(id, parseInt(inputQuantity));
            changeEditMode();
          }
        }}
      >
        {!editMode ? (
          <RiEdit2Line color="#f4ee91" size="2vh" />
        ) : (
          <FaCheck color="#f4ee91" size="2vh" />
        )}
      </Button>
    </>
  );
};
