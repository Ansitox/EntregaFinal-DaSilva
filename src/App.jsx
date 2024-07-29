import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar/NavBar";
import { ItemListContainer } from "./pages/ItemList/ItemListContainer";
import { ItemDetailContainer } from "./pages/ItemDetail/ItemDetailContainer";
import { ScreenMessage } from "./pages/ScreenMessage/ScreenMessage";
import CartContextProvider from "./context/CartContext";

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <Routes>
          <Route element={<NavBar />}>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:category" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route
              path="/cart"
              element={
                <ScreenMessage message="No has agregado ningún producto al carrito." />
              }
            />
            <Route
              path="*"
              element={
                <ScreenMessage message="Error 404, no se ha podido encontrar la página." />
              }
            />
          </Route>
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
