import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

import Swal from "sweetalert2";

import { Cart } from "./Cart";
import { toast } from "sonner";

export const CartContainer = () => {
  const { cart, cleanCart, getTotalPrice } = useContext(CartContext);
  const emptyCart = () => {
    Swal.fire({
      title: "¿Deseas limpiar el carrito?",
      icon: "warning",
      showDenyButton: false,
      showCancelButton: true,
      confirmButtonText: "Si",
      confirmButtonColor: "#3e8a53",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        cleanCart();
        toast.success("Carrito vaciado con éxito.", { duration: 1000 });
      }
    });
  };
  return (
    <Cart cart={cart} cleanCart={emptyCart} getTotalPrice={getTotalPrice} />
  );
};
