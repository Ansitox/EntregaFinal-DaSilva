import { CounterContainer } from "../../components/Caounter/CounterContainer";

import "./itemDetail.css";

export const ItemDetail = ({ item, onAdd, initial }) => {
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
          <CounterContainer
            stock={item.stock}
            initial={initial}
            onAdd={onAdd}
            id={item.id}
          />
        </div>
      </div>
    </div>
  );
};
