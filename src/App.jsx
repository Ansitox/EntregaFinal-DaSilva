import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar/NavBar";
import { ItemListContainer } from "./pages/ItemList/ItemListContainer";
import { ItemDetailContainer } from "./pages/ItemDetail/ItemDetailContainer";
import { ScreenMessage } from "./pages/ScreenMessage/ScreenMessage";
import CartContextProvider from "./context/CartContext";
import { routes } from "./routes/routes";

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <Routes>
          <Route element={<NavBar />}>
            {routes.map(({ id, path, Element, props }) => {
              return (
                <Route key={id} path={path} element={<Element {...props} />} />
              );
            })}
          </Route>
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
