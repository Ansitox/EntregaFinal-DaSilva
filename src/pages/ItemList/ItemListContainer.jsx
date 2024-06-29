import { useState } from "react";
import { ItemList } from "./ItemList";
import "./itemList.css";

export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  return <ItemList />;
};
