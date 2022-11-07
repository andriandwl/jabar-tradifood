import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import AboutUs from "./AboutUs";
import Auth from "./Auth";
import CartPage from "./CartPage";
import DetailPage from "./DetailPage";
import HomePage from "./HomePage";
import Login from "./Login";
import MenuPage from "./MenuPage";
import PaymentPage from "./PaymentPage";
import ProfilePage from "./ProfilePage";
import Register from "./Register";

function LandingPage() {
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
          <Route path="/auth/*" element={<Auth />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default LandingPage;
