import { useEffect, useState } from "react";
import { myProducts } from "../../products";
import { ItemList } from "./ItemList";
import "./itemList.css";
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState({});

  const { category } = useParams();

  useEffect(() => {
    const getProducts = new Promise((resolve, reject) => {
      let filteredProducts = myProducts.filter(
        (product) => product.category === category
      );

      if (myProducts) {
        resolve(category ? filteredProducts : myProducts);
      } else {
        reject({ message: "No se encontraron productos" });
      }
    });

    getProducts.then((res) => setProducts(res)).catch((err) => setError(err));
  }, [category]);

  return <ItemList items={products} />;
};
