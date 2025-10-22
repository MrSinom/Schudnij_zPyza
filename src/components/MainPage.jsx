import styles from "./MainPage.module.css";
import heroImg from "../assets/portrait.svg"; 
function MainPage() {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.textWrapper}>
          <h1>Schudnij z Pyzą</h1>
          <p className={styles.subtitle}>
            Jedzenie, ruch i spokój — bez spiny, bez cudów. Tylko rzeczy, które działają.
          </p>
          <div className={styles.ctaRow}>
            <button className={styles.ctaPrimary}>Zacznij</button>
            <button className={styles.ctaSecondary}>Poznaj podejście</button>
          </div>
        </div>
        <div className={styles.imageWrapper}>
          <img src={heroImg} alt="Kinga - Schudnij z Pyzą" />
        </div>
      </div>
    </section>
  );
}

export default MainPage;