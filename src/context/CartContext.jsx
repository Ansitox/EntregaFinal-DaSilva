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
      setAndStorage([...cart, product]);
    }
  };

  const getTotalItems = () => {
    return cart.reduce((total, product) => total + product.quantity, 0);
  };

  const cleanCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  const getTotalPrice = () => {
    let total = cart.reduce((acc, elemento) => {
      return acc + elemento.price * elemento.quantity;
    }, 0);
    return total;
  };

  const editCartItemQuantity = (id, quantity) => {
    let newCart = cart.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: quantity };
      } else {
        return item;
      }
    });
    setAndStorage(newCart);
  };

  const deleteItem = (id) => {
    Swal.fire({
      title: "¿Deseas eliminar este producto?",
      text: "El cambio será permanente, puede volver a agregar productos desde la tienda.",
      showDenyButton: false,
      showCancelButton: true,
      confirmButtonText: "Si",
      confirmButtonColor: "#3e8a53",
      denyButtonText: `No`,
    }).then((result) => {
      if (result.isConfirmed) {
        let newCart = cart.filter((item) => item.id !== id);
        setAndStorage(newCart);
        toast.success("Producto eliminado", { duration: 1000 });
      }
    });
  };

  let data = {
    cart,
    addToCart,
    cleanCart,
    editCartItemQuantity,
    deleteItem,
    getQuantityById,
    getTotalItems,
    getTotalPrice,
    isInCart,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
