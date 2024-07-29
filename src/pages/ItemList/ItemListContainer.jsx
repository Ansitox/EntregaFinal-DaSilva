import { useEffect, useState } from "react";
import { myProducts } from "../../products";
import { ItemList } from "./ItemList";
import "./itemList.css";
import { useParams } from "react-router-dom";
import { db } from "../../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState({});

  const { category } = useParams();

  useEffect(() => {
    const productsCollection = collection(db, "products");
    const getProducts = getDocs(productsCollection);
    getProducts.then((res) => {
      let products = res.docs.map((product) => {
        return {
          ...product.data(),
          id: product.id,
        };
      });
      setProducts(products);
    });
  }, [category]);

  return <ItemList items={products} />;
};
