import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";

import Navigation from "./components/Navigation";
import AboutUs from "./pages/AboutUs";
import Auth from "./pages/Auth";
import CartPage from "./pages/CartPage";
import Dashboard from "./pages/Dashboard";
import DetailPage from "./pages/DetailPage";
import HomePage from "./pages/HomePage";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import MenuPage from "./pages/MenuPage";
import PaymentPage from "./pages/PaymentPage";
import ProfilePage from "./pages/ProfilePage";
import Register from "./pages/Register";

function App() {
  return (
    <div>
      <header>
        <Navigation />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/menu/:id" element={<DetailPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/home" element={<LandingPage />} />
          <Route path="/auth/*" element={<Auth />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
