import { useEffect, useState } from "react";
import { ItemDetail } from "./ItemDetail";
import { useParams } from "react-router-dom";
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig";

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    let productsCollection = collection(db, "products");
    let refDoc = doc(productsCollection, id);
    let getProdcut = getDoc(refDoc);
    getProdcut.then((res) => {
      setProduct({ ...res.data(), id: res.id });
    });
  }, [id]);

  return <ItemDetail item={product} />;
};
