import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig";

import Swal from "sweetalert2";
import { toast } from "sonner";

import { CartContext } from "../../context/CartContext";
import { ItemDetail } from "./ItemDetail";

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const { addToCart, getQuantityById } = useContext(CartContext);

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
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Producto Agregado",
      showConfirmButton: true,
    });
    toast.success("Producto Agregado");
  };

  return <ItemDetail item={product} onAdd={onAdd} initial={initialQuantity} />;
};
