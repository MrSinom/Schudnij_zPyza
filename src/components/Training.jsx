import styles from "./Training.module.css";
import trainingImg from "../assets/running_portrait.svg"; 

function Training() {
  return (
    <section className={styles.container}>
      <div className={styles.inner}>
        
        <div className={styles.textWrapper}>
          <h1>Treningi z Pyzą</h1>
          <p>
            Ruch to nie kara, tylko inwestycja w siebie. Moje podejście do
            treningu opiera się na prostocie, skuteczności i szacunku do ciała.
          </p>
          <p>
            <strong>Siłownia:</strong> uczę podstawowych ćwiczeń, które naprawdę
            działają. Bez zbędnych maszyn — tylko ruchy, które budują siłę,
            pewność siebie i zdrowie.
          </p>
          <p>
            <strong>Mobilność:</strong> krótkie sesje rozciągania, oddechu i
            kontroli pozycji. Idealne dla osób pracujących przy biurku lub
            zmagających się z bólem pleców.
          </p>
          <p>
            <strong>Treningi personalne:</strong> kończę kurs trenera
            personalnego, by móc prowadzić Cię indywidualnie — online i
            stacjonarnie. Już niedługo ruszą zapisy na konsultacje 1:1.
          </p>
        </div><div className={styles.imageWrapper}>
          <img src={trainingImg} alt="Kinga - treningi personalne" />
        </div>
      </div>
    </section>
  );
}

export default Training;