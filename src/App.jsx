// src/App.jsx
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Cookies from "./Maintanance/Cookies";
import Header from "./components/Header";
import MainPage from "./components/MainPage";
import AboutMe from "./components/AboutMe";
import Ebook from "./components/Ebook";
import CookingSite from "./components/CookingSite";
import Training from "./components/Training";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

import CookiesPolicy from "./Maintanance/CookiesPolicy";
import Policy from "./Maintanance/Policy";

function App() {
  return (
    <>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/ebook" element={<Ebook />} />
          <Route path="/cooking" element={<CookingSite />} />
          <Route path="/training" element={<Training />} />
          <Route path="/contact" element={<ContactForm />} />

          <Route path="/polityka-cookies" element={<CookiesPolicy />} />
          <Route path="/regulamin" element={<Policy />} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />
      <Cookies />
    </>
  );
}

export default App;