import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

import { useFormik } from "formik";
import * as Yup from "yup";

import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig";

import { Checkout } from "./Checkout";
import Swal from "sweetalert2";

export const CheckoutContainer = () => {
  const [orderId, setOrderId] = useState();
  const { getTotalPrice, cart, cleanCart } = useContext(CartContext);
  const navigate = useNavigate();

  let productsCollection = collection(db, "products");
  let ordersCollection = collection(db, "orders");

  const { handleSubmit, handleChange, errors, values } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      repeatEmail: "",
    },
    validateOnChange: false,
    validationSchema: Yup.object({
      firstName: Yup.string()
        .required("Campo obligatorio.")
        .min(3, "Debe tener al menos 5 caracteres."),
      lastName: Yup.string()
        .required("Campo obligatorio.")
        .min(3, "Debe tener al menos 5 caracteres."),
      phoneNumber: Yup.number().required("Campo obligatorio."),
      email: Yup.string()
        .required("Campo obligatorio.")
        .email("No es un formato valido de email."),
      repeatEmail: Yup.string()
        .required("Campo obligatorio.")
        .oneOf([Yup.ref("email")], "Los emails no coinciden."),
    }),
    onSubmit: (userData) => {
      cart.forEach((element) => {
        let refDoc = doc(productsCollection, element.id);
        updateDoc(refDoc, { stock: element.stock - element.quantity });
      });

      let order = {
        buyer: userData,
        items: cart,
        total: getTotalPrice(),
        date: new Date(),
      };

      addDoc(ordersCollection, order)
        .then((res) => {
          setOrderId(res.id);
          Swal.fire({
            title: "Compra exitosa",
            html: `<h2>La orden de tu compra es: <strong>${res.id}</strong></h2><`,
            icon: "success",
            confirmButtonColor: "#3e8a53",
          });
        })
        .finally(() => {
          cleanCart(false);
          navigate("/");
        });
    },
  });

  return (
    <Checkout
      total={getTotalPrice()}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      errors={errors}
    />
  );
};
