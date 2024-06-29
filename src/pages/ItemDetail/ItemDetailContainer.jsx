import { useEffect, useState } from "react";
import { ItemDetail } from "./ItemDetail";
import { myProducts } from "../../products";
import { useParams } from "react-router-dom";

export const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const { id } = useParams();

  useEffect(() => {
    let product = myProducts.find((product) => product.id === +id);

    if (product) {
      setItem(product);
    }
  }, [id]);

  return <ItemDetail item={item} />;
};
