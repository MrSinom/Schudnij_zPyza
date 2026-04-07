import { useEffect } from "react"; // DODANE
import { Routes, Route, Navigate, useLocation } from "react-router-dom"; // DODANE useLocation
import ReactGA from "react-ga4";

// Komponenty
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
import ThankYouPage from "./components/ThankYouPage";

// INICJALIZACJA (podmień na swój klucz!)
ReactGA.initialize("G-N5WEC963HK"); 

function App() {

 const location = useLocation();

  useEffect(() => {
    const consent = localStorage.getItem("cookiesConsent");
    
    if (consent === "accepted") {
      // Inicjalizujemy tylko, jeśli jest zgoda
      // Jeśli ReactGA już był zainicjalizowany, biblioteka to obsłuży
      ReactGA.initialize(import.meta.env.VITE_GA_ID); 
      
      ReactGA.send({ 
        hitType: "pageview", 
        page: location.pathname + location.search 
      });
    }
  }, [location]);
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
          <Route path="/dziekuje" element={<ThankYouPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />
      <Cookies />
    </>
  );
}

export default App;