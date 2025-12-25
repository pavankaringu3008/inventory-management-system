import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Customers from "./pages/Customers";
import Products from "./pages/Products";
import Suppliers from "./pages/Suppliers";
import Warehouses from "./pages/Warehouse";
import Orders from "./pages/Orders";
import "react-toastify/dist/ReactToastify.css";
import { Navigate } from "react-router-dom"; 

export default function App() {
  return (
    <BrowserRouter>
      <ToastContainer position="top-right" autoClose={3000} />
      <Routes>
        <Route path="/" element={<Navigate to="/customers" replace />} />
        <Route path="/customers" element={<Customers/>} />
        <Route path="/products" element={<Products />} />
      
        <Route path="/suppliers" element={<Suppliers />} />
        <Route path="/warehouses" element={<Warehouses />} />
        <Route path="/orders" element={<Orders />} />
        {/* <Route path="*" element={<h1 className="text-center mt-20 text-3xl">404 Page Not Found</h1>} /> */}
      <Route path="*" element={<h1 className="text-center mt-20 text-3xl">404 Page Not Found</h1>} />

      </Routes>
    </BrowserRouter>
  );
}
