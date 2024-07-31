import { createContext, useState } from "react";

import { toast } from "sonner";
import Swal from "sweetalert2";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  const setAndStorage = (cart) => {
    setCart(cart);
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  const isInCart = (id) => {
    return cart.some((product) => product.id === id);
  };

  const getQuantityById = (id) => {
    return cart.find((product) => product.id === id)?.quantity;
  };

  const addToCart = (product) => {
    const { stock, ...productWithoutStock } = product;

    if (isInCart(product.id)) {
      let newCart = cart.map((item) => {
        if (item.id === product.id) {
          return { ...item, quantity: product.quantity };
        } else {
          return item;
        }
      });
      setAndStorage(newCart);
    } else {
      setAndStorage([...cart, productWithoutStock]);
    }
  };

  const getTotalItems = () => {
    return cart.reduce((total, product) => total + product.quantity, 0);
  };

  const cleanCart = () => {
    Swal.fire({
      title: "¿Deseas limpiar el carrito?",
      icon: "warning",
      showDenyButton: false,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`,
    }).then((result) => {
      if (result.isConfirmed) {
        setCart([]);
        localStorage.removeItem("cart");
        toast.success("Carrito vaciado con éxito.", { duration: 1500 });
      }
    });
  };

  let data = {
    cart,
    addToCart,
    cleanCart,
    getQuantityById,
    getTotalItems,
    isInCart,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
