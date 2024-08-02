import { CartContainer } from "../pages/Cart/CartContainer";
import { CheckoutContainer } from "../pages/Checkout/CheckoutContainer";
import { ItemDetailContainer } from "../pages/ItemDetail/ItemDetailContainer";
import { ItemListContainer } from "../pages/ItemList/ItemListContainer";
import { ScreenMessage } from "../pages/ScreenMessage/ScreenMessage";

export const routes = [
  {
    id: 1,
    path: "*",
    Element: ScreenMessage,
    props: { message: "Error 404, no se ha podido encontrar la página." },
  },
  {
    id: 2,
    path: "/",
    Element: ItemListContainer,
  },
  {
    id: 3,
    path: "/category/:category",
    Element: ItemListContainer,
  },
  {
    id: 4,
    path: "/item/:id",
    Element: ItemDetailContainer,
  },
  {
    id: 5,
    path: "/cart",
    Element: CartContainer,
  },
  {
    id: 6,
    path: "/checkout",
    Element: CheckoutContainer,
  },
];
