// src/components/Cookies.jsx
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookiesConsent", "declined");
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