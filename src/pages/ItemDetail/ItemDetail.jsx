import { MoonLoader, PuffLoader } from "react-spinners";
import { CounterContainer } from "../../components/Counter/CounterContainer";

import "./itemDetail.css";

export const ItemDetail = ({ item, onAdd, initial }) => {
  return (
    <div className="detail-container">
      {item.name ? (
        <>
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
        </>
      ) : (
        <div className="detail-loader">
          <MoonLoader color="#3e8a53" speedMultiplier={0.4} />{" "}
        </div>
      )}
      ;
    </div>
  );
};
