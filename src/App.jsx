import { BrowserRouter, Routes, Route } from "react-router-dom";

import CartContextProvider from "./context/CartContext";
import { routes } from "./routes/routes";

import { Toaster } from "sonner";

import { NavBarContainer } from "./components/NavBar/NavBarContainer";

function App() {
  return (
    <BrowserRouter>
      <Toaster
        richColors
        position="top-right"
        expand="false"
        toastOptions={{
          style: {
            minHeight: "3rem",
            borderColor: "#a9f291",
            color: "#3e8a53",
          },
        }}
        gap="5"
      />
      <CartContextProvider>
        <Routes>
          <Route element={<NavBarContainer />}>
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
