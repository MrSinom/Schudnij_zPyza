import { useState } from "react";
import styles from "./Ebook.module.css";
import ReactGA from "react-ga4"; // Importujemy bibliotekę

function Ebook() {
  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {
    setLoading(true);
    try {
      // Sprawdzamy zgodę na cookies
      const consent = localStorage.getItem("cookiesConsent");
      const allowed = consent === "accepted";

      // 1) Opcjonalne śledzenie serwerowe (jeśli masz takie API na Vercel/backendzie)
      fetch("/api/track-download", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ item: "ebook-sample", ts: Date.now() }),
      }).catch(() => {});

      // 2) Śledzenie przez react-ga4 (tylko jeśli użytkownik wyraził zgodę)
      if (allowed) {
        ReactGA.event({
          category: "Ebook",
          action: "Download Sample",
          label: "ebook-sample.pdf",
        });
      }

      // 3) Otwieranie pliku
      // Upewnij się, że plik ebook-sample.pdf znajduje się w folderze /public
      window.open("/ebook-sample.pdf", "_blank");

    } catch (error) {
      console.error("Błąd podczas pobierania:", error);
    } finally {
      // Symulacja przygotowania pliku dla lepszego UX
      setTimeout(() => setLoading(false), 600);
    }
  };

  return (
    <section className={styles.wrapper}>
      <div className={styles.content}>
        <h1>Jedz smacznie, zdrowo i osiągaj swoje cele.</h1>
        <p className={styles.lead}>
          Mój eBook pokazuje, że jedzenie to nie nasz wróg, a prawdziwe paliwo dla ciała i umysłu...
        </p>
        <ul className={styles.features}>
          <li>Bez restrykcji. </li>
          <li>Bez głodówek. </li>
          <li>Z efektem.</li>
        </ul>
        <div className={styles.ctaRow}>
          <button
            className={styles.buy}
            onClick={handleDownload}
            disabled={loading}
            aria-disabled={loading}
            aria-busy={loading}
          >
            {loading ? "Przygotowywanie..." : "Pobierz próbkę (PDF)"}
          </button>
        </div>
      </div>

      <div className={styles.previewPane}>
        <div className={styles.pageMock}>
          <h3>Fragment</h3>
          <p>
            Twoja dieta nie musi być perfekcyjna. Wystarczy, że będzie wystarczająco dobra...
          </p>
        </div>
      </div>
    </section>
  );
}

export default Ebook;