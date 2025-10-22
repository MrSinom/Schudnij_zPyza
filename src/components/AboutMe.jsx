import styles from "./AboutMe.module.css";
import profileImg from "../assets/portrait.svg"; 

function AboutMe(){
  return (
    <section className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.imageWrapper}>
          <img src={profileImg} alt="Pyza - trenerka i dietetyk" />
        </div>
        <div className={styles.textWrapper}>
          <h1>O mnie</h1>
          <p>
            Cześć, jestem Pyza! Łączę dietetykę z treningiem, aby zdrowy styl
            życia był prosty, przyjemny i skuteczny.
          </p>
          <p>
            <strong>Moja misja:</strong> pokazać, że zdrowe nawyki nie muszą być
            nudne ani skomplikowane.
          </p>
          <ul>
            <li>Indywidualne podejście i jasny plan</li>
            <li>Praktyczne przepisy i nawyki</li>
            <li>Skuteczne, proste treningi</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
export default AboutMe;