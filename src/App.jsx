import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavigationBar } from "./components/navbar";
import { HomePage } from "./pages/home";
import { Phone } from "./pages/products/phone";
import { Vehicles } from "./pages/products/vehicles";
import { Televisions } from "./pages/products/television";
import { SpareParts } from "./pages/products/spareParts";
import { ShoppingCart } from "./pages/shoppingCart";
import { ShoppingCartProvider } from "./hooks/ShoppingCartContext";
import "./index.css";
import { Checkout } from "./pages/checkout";
import { Registration } from "./components/Authentication/Registration";
// import AuthRoutes from "./AuthRoutes";

function App() {
  return (
    <>
      <BrowserRouter>
        <ShoppingCartProvider>
          <NavigationBar />
          <Routes>
            <Route path="" element={<HomePage />} />
            <Route path="/register" element={<Registration />} />
            <Route path="/category/phones" element={<Phone />} />
            <Route path="/category/vehicles" element={<Vehicles />} />
            <Route path="/category/Television" element={<Televisions />} />
            <Route path="/category/spare-parts" element={<SpareParts />} />
            <Route path="/shopping/cart" element={<ShoppingCart />} />
            <Route path="/checkout/payment" element={<Checkout />} />
            {/* Authentication routes */}
          </Routes>
        </ShoppingCartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
