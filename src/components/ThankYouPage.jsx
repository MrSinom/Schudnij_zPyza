import { useNavigate } from "react-router-dom";
import styles from "./ThankYouPage.module.css";
import gratulacjeImg from "../assets/kuchnia1.jpeg"; // Możesz tu wstawić dowolne zdjęcie

function ThankYouPage() {
  const navigate = useNavigate();

  return (
    <section className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.content}>
          <div className={styles.imageWrapper}>
            <img src={gratulacjeImg} alt="Dziękujemy za kontakt" />
          </div>
          
          <h1>Wiadomość wysłana!</h1>
          <p>
            Dziękuję za kontakt. Twoja wiadomość dotarła do mojej kuchni! 
            Otrzymasz odpowiedź tak szybko, jak to tylko możliwe.
          </p>
          
          <button 
            className={styles.backButton} 
            onClick={() => navigate("/")}
          >
            Wróć do strony głównej
          </button>
        </div>
      </div>
    </section>
  );
}

export default ThankYouPage;