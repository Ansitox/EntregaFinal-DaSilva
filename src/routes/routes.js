import { CartContainer } from "../pages/Cart/CartContainer";
import { ItemDetailContainer } from "../pages/ItemDetail/ItemDetailContainer";
import { ItemListContainer } from "../pages/ItemList/ItemListContainer";
import { ScreenMessage } from "../pages/ScreenMessage/ScreenMessage";

export const routes = [
  {
    id: 1,
    path: "/",
    Element: ItemListContainer,
  },
  {
    id: 2,
    path: "/category/:category",
    Element: ItemListContainer,
  },
  {
    id: 3,
    path: "/item/:id",
    Element: ItemDetailContainer,
  },
  {
    id: 4,
    path: "/cart",
    Element: CartContainer,
  },
  {
    id: 5,
    path: "*",
    Element: ScreenMessage,
    props: { message: "Error 404, no se ha podido encontrar la página." },
  },
];
