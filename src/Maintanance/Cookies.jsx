import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ReactGA from "react-ga4"; // DODANE
import styles from "./Cookies.module.css";

const Cookies = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookiesConsent");
    if (consent !== "accepted" && consent !== "declined") {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookiesConsent", "accepted");
    
    // Kluczowy moment: Inicjalizujemy GA4 natychmiast po kliknięciu
    ReactGA.initialize(import.meta.env.VITE_GA_ID);
    
    // Wysyłamy pierwsze wejście na stronę (bo useEffect w App.jsx mógł je pominąć przez brak zgody)
    ReactGA.send({ 
      hitType: "pageview", 
      page: window.location.pathname + window.location.search 
    });

    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookiesConsent", "declined");
    // Nic więcej nie robimy - GA4 nigdy się nie odpali
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className={styles.banner} role="dialog" aria-live="polite" aria-label="Cookie banner">
      <div className={styles.content}>
        <p className={styles.text}>
          Używamy plików cookies w celu poprawy działania aplikacji, analizy ruchu oraz personalizacji treści. Szczegóły znajdziesz w{" "}
          <Link to="/polityka-cookies" className={styles.link}>Polityce Cookies</Link>{" "}
          oraz{" "}
          <Link to="/regulamin" className={styles.link}>Regulaminie</Link>.
        </p>

        <div className={styles.buttons}>
          <button onClick={handleAccept} className={`${styles.btn} ${styles.accept}`}>
            Akceptuję
          </button>
          <button onClick={handleDecline} className={`${styles.btn} ${styles.decline}`}>
            Odrzuć
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cookies;