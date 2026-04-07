import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ReactGA from "react-ga4";
import styles from "./Cookies.module.css";

const Cookies = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Sprawdzamy, czy użytkownik już podjął decyzję
    const consent = localStorage.getItem("cookiesConsent");
    if (consent !== "accepted" && consent !== "declined") {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    // 1. Natychmiastowe ukrycie paska i zapisanie zgody
    setVisible(false);
    localStorage.setItem("cookiesConsent", "accepted");

    // 2. Bezpieczna inicjalizacja GA4
    try {
      const gaId = import.meta.env.VITE_GA_ID;

      if (gaId) {
        ReactGA.initialize(gaId);
        // Wysyłamy pierwsze wejście na stronę zaraz po zaakceptowaniu
        ReactGA.send({ 
          hitType: "pageview", 
          page: window.location.pathname + window.location.search 
        });
        console.log("Analityka została pomyślnie uruchomiona.");
      } else {
        console.warn("Błąd: Nie znaleziono klucza VITE_GA_ID w zmiennych środowiskowych.");
      }
    } catch (error) {
      // Jeśli biblioteka ReactGA rzuci błąd, przechwytujemy go tutaj
      console.error("Wystąpił problem z inicjalizacją Google Analytics:", error);
    }
  };

  const handleDecline = () => {
    // Zapisujemy odmowę i chowamy pasek - analityka nie zostanie uruchomiona
    localStorage.setItem("cookiesConsent", "declined");
    setVisible(false);
  };

  // Jeśli użytkownik już zdecydował, nie renderuj nic
  if (!visible) return null;

  return (
    <div className={styles.banner} role="dialog" aria-live="polite" aria-label="Cookie banner">
      <div className={styles.content}>
        <p className={styles.text}>
          Używamy plików cookies w celu poprawy działania aplikacji, analizy ruchu oraz personalizacji treści. 
          Szczegóły znajdziesz w{" "}
          <Link to="/polityka-cookies" className={styles.link}>Polityce Cookies</Link>{" "}
          oraz{" "}
          <Link to="/regulamin" className={styles.link}>Regulaminie</Link>.
        </p>

        <div className={styles.buttons}>
          <button 
            onClick={handleAccept} 
            className={`${styles.btn} ${styles.accept}`}
          >
            Akceptuję
          </button>
          <button 
            onClick={handleDecline} 
            className={`${styles.btn} ${styles.decline}`}
          >
            Odrzuć
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cookies;