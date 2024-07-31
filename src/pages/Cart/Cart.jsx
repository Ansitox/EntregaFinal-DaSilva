import { Button } from "@mui/material";

import { LuTrash } from "react-icons/lu";
import { Link } from "react-router-dom";

export const Cart = ({ cart, totalItems, cleanCart }) => {
  return (
    <div className="cart-container">
      {cart.length === 0 ? (
        <>
          <h2>El carrito está vacío</h2>
          <p>Agrega prodcutos al carrito para proceder con la compra.</p>
          <Link to="/">
            <Button variant="contained">Volver a la tienda</Button>
          </Link>
        </>
      ) : (
        <>
          <div className="cart-items-container">
            <div className="cart-header">
              <span>{totalItems}</span>
              <p>Articulos en el carrito</p>
              <Button variant="contained" onClick={() => cleanCart()}>
                <LuTrash color="#f4ee91" size="2vh" />
                Vaciar carrito
              </Button>
            </div>
            {cart.map((item) => (
              <div className="cart-item" key={item.id}>
                {/* <img src={item.image} alt={item.name} /> */}
                <div className="cart-item-info">
                  <p className="cart-item-name">{item.name}</p>
                  <p className="cart-item-quantity">
                    Cantidad: {item.quantity}
                  </p>
                  <p className="cart-item-price">${item.price}</p>
                </div>
              </div>
            ))}
          </div>
          <div></div>
        </>
      )}
    </div>
  );
};
