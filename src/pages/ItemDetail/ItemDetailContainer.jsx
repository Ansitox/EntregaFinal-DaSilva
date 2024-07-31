import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig";

import { toast } from "sonner";

import { CartContext } from "../../context/CartContext";
import { ItemDetail } from "./ItemDetail";

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const { addToCart, getQuantityById, isInCart, cart } =
    useContext(CartContext);

  let toastMsg =
    isInCart(id) && product.id === id
      ? "Cantidad editada"
      : "Producto agregado";

  let initialQuantity = getQuantityById(id);

  useEffect(() => {
    let productsCollection = collection(db, "products");
    let refDoc = doc(productsCollection, id);
    let getProdcut = getDoc(refDoc);
    getProdcut.then((res) => {
      setProduct({ ...res.data(), id: res.id });
    });
  }, [id]);

  const onAdd = (quantity) => {
    let finalProdcut = { ...product, quantity: quantity };
    addToCart(finalProdcut);

    toast.success(toastMsg, { duration: 1500 });
  };

  return <ItemDetail item={product} onAdd={onAdd} initial={initialQuantity} />;
};
