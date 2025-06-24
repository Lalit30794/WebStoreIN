import React from "react";
import "./App.css";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import AITheme from "./pages/AITheme";
import Signup from "./pages/Signup";
// ...import other pages/layouts as needed

const router = createBrowserRouter(
  createRoutesFromElements(
     <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="products" element={<Products />} />
      <Route path="cart" element={<Cart />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup/>} />
      <Route path="ai-theme" element={<AITheme />} />
      {/* Add more nested or dynamic routes as needed */}
      <Route path="*" element={<div className="p-8 text-center">Page Not Found</div>} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;