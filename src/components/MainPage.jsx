import { Link } from "react-router-dom";

import styles from "./MainPage.module.css";
import heroImg from "../assets/portrait.svg";
import Particles from "../Animation/Particles"

function MainPage() {
  return (
    <section className={styles.hero}>
      <Particles count={20} />          {/* <-- tutaj wstawiasz animację */}
      <div className={styles.inner}>
        <div className={styles.textWrapper}>
          <h1>Schudnij z Pyzą</h1>
          <p className={styles.subtitle}>
            Jedzenie, ruch i spokój — bez spiny, bez cudów. Tylko rzeczy, które działają.
          </p>
          <div className={styles.ctaRow}>
           <Link to="/training" className={styles.ctaPrimary}>
        Zacznij
      </Link>

          <Link to="/about" className={styles.ctaSecondary}>
        Poznaj podejście
      </Link>

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