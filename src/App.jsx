import { BrowserRouter, Routes, Route } from "react-router-dom";

import CartContextProvider from "./context/CartContext";
import { routes } from "./routes/routes";

import { Toaster } from "sonner";

import { NavBar } from "./components/NavBar/NavBar";

function App() {
  return (
    <BrowserRouter>
      <Toaster
        richColors
        position="bottom-right"
        expand="false"
        toastOptions={{
          style: {
            minHeight: "3rem",
            backgroundColor: "#f4ee9199",
            borderColor: "#a9f291",
            color: "#3e8a53",
          },
        }}
        gap="5"
      />
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
