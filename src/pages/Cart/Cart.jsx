import { Button } from "@mui/material";

import { LuTrash } from "react-icons/lu";
import { Link } from "react-router-dom";

import { CartCard } from "../../components/CartCard/CartCard";

import "./cart.css";

export const Cart = ({ cart, cleanCart, getTotalPrice }) => {
  return (
    <div className="cart-container">
      {cart.length === 0 ? (
        <div className="empty-cart">
          <h1>El carrito está vacío</h1>
          <p>Agrega prodcutos al carrito para proceder con la compra.</p>
          <Link to="/">
            <Button variant="contained">Volver a la tienda</Button>
          </Link>
        </div>
      ) : (
        <>
          <div className="cart-items-container">
            <div className="cart-header">
              <span className="cart-items-count">{cart.length}</span>
              <p>
                {cart.length > 1
                  ? "Artículos en el carrito"
                  : "Artículo en el carrito"}
              </p>
              <Button variant="contained" onClick={() => cleanCart()}>
                <LuTrash color="#f4ee91" size="2vh" />
                Vaciar carrito
              </Button>
            </div>
            {cart.map((item) => (
              <CartCard key={item.id} item={item} />
            ))}
          </div>
          <div className="cart-total">
            <h3>El total de tu compra es:</h3>
            <p>${getTotalPrice()}</p>
            <Link to="/checkout">
              <Button variant="contained">Finalziar compra</Button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};
