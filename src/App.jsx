import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar/NavBar";
import { ItemListContainer } from "./pages/ItemList/ItemListContainer";
import { ItemDetailContainer } from "./pages/ItemDetail/ItemDetailContainer";
import { CartContainer } from "./pages/Cart/CartContainer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<NavBar />}>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:category" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<CartContainer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
