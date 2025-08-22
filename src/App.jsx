import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import CartPage from "./pages/CartPage";
import ProductDetails from "./pages/ProductDetails";
// Backoffice
import BackOfficeProducts from "./pages/BackOfficeProducts";
import BackOfficeUsers from "./pages/BackOfficeUsers";
import BackOfficeOrders from "./pages/BackOfficeOrders";
import "./App.css";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <NavBar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />

          {/* Backoffice */}
          <Route path="/backoffice/products" element={<BackOfficeProducts />} />
          <Route path="/backoffice/users" element={<BackOfficeUsers />} />
          <Route path="/backoffice/orders" element={<BackOfficeOrders />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
