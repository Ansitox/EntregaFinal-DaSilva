import "./itemDetail.css";

export const ItemDetail = ({ item }) => {
  return (
    <div className="detail-container">
      <div className="img-container">
        <img src={item.image} alt={item.title} />
      </div>
      <div className="content-container">
        <div className="detail-data">
          <div className="title">{item.name}</div>
          <div className="description">{item.description}</div>
          <div className="price">Precio: ${item.price}</div>
        </div>
        <div className="detail-actions">
          <button className="add-to-cart" disabled>
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
};
