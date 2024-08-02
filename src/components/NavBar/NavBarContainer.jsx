import { useLocation } from "react-router-dom";
import { NavBar } from "./NavBar";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { useEffect, useState } from "react";

export const NavBarContainer = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const categoriesCollection = collection(db, "categories");
    const getCategories = getDocs(categoriesCollection);
    getCategories.then((res) => {
      let fixedCategories = res.docs.map((category) => {
        return {
          ...category.data(),
          id: category.id,
        };
      });
      setCategories(fixedCategories);
    });
  }, []);

  return <NavBar location={useLocation()} categories={categories} />;
};
