import "./cartCard.css";
export const CartCard = ({ item }) => {
  return (
    <div className="cart-item" key={item.id}>
      {/* <img src={item.image} alt={item.name} /> */}
      <div className="cart-item-info">
        <p className="cart-item-name">{item.name}</p>
        <p className="cart-item-quantity">Cantidad: {item.quantity}</p>
        <p className="cart-item-price">${item.price}</p>
      </div>
    </div>
  );
};
