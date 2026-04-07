// src/components/Ebook.jsx
import { useState } from "react";
import styles from "./Ebook.module.css";

function Ebook() {
  const [loading, setLoading] = useState(false);

 const handleDownload = async () => {
  setLoading(true);
  try {
    // Respektuj zgodę cookies; tylko gdy "accepted"
    const consent = localStorage.getItem("cookiesConsent");
    const allowed = consent === "accepted";

    // 1) opcjonalne lokalne śledzenie serwerowe (nie blokuje pobrania)
    fetch("/api/track-download", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ item: "ebook-sample", ts: Date.now() }),
    }).catch(() => {});

    // 2) GA4 event (jeśli zgoda i gtag dostępne)
    try {
      if (allowed && window.gtag) {
        window.gtag("event", "download", {
          event_category: "ebook",
          event_label: "ebook-sample",
          file_name: "ebook-sample.pdf",
        });
      } else if (allowed && window.dataLayer) {
        window.dataLayer.push({ event: "ebook_download", item: "ebook-sample" });
      }
    } catch (e) { /* silent fail */ }

    // 3) wymuszone pobranie pliku z public/
    const url = "/ebook-sample.pdf";
    window.open("/ebook-sample.pdf")
  } finally {
    setTimeout(() => setLoading(false), 600);
  }
};

  return (
    <section className={styles.wrapper}>
      <div className={styles.content}>
        <h1>Jedz smacznie, zdrowo i osiągaj swoje cele.</h1>
        <p className={styles.lead}>
          Mój eBook pokazuje, że jedzenie to nie nasz wróg, a prawdziwe paliwo dla ciała i umysłu – i że paliwo nie musi być monotonne. To zbiór sprawdzonych przepisów, które udowadniają, że zdrowe odżywianie może być smaczne, ciekawe i satysfakcjonujące, a przy tym pomaga schudnąć, zadbać o sylwetkę i poczuć się lepiej każdego dnia.
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
            Twoja dieta nie musi być perfekcyjna. Wystarczy, że będzie wystarczająco dobra
            przez większość dni. To już robi różnicę.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Ebook;