import styles from "./CookingSite.module.css";
import kuchnia1 from "../assets/kuchnia1.jpeg";
import kuchnia2 from "../assets/kuchnia2.jpeg";
import kuchnia3 from "../assets/kuchnia3.jpeg";

function CookingSite() {
  return (
    <section className={styles.container}>
   
      <div className={styles.inner}>
    
        <div className={styles.contentWrapper}>
          <div className={`${styles.imageBox} ${styles.img1}`}>
            <img src={kuchnia1} alt="Kuchnia Pyzy 1" />
          </div>
          <div className={`${styles.imageBox} ${styles.img2}`}>
            <img src={kuchnia2} alt="Kuchnia Pyzy 2" />
          </div>
          <div className={`${styles.imageBox} ${styles.img3}`}>
            <img src={kuchnia3} alt="Kuchnia Pyzy 3" />
          </div>
  
          {/* Teksty */}
          <div className={`${styles.textBox} ${styles.text1}`}>
            <h1 className={styles.title}>Kuchnia Pyzy</h1>
            <p>
              <strong>Już w 2026</strong> roku zaproszę Was w wyjątkowe miejsce – do moich rodzinnych stron, do Gostyni, gdzie w Winnicy Gostynka powstanie coś więcej niż kuchnia. Od czwartku do niedzieli będę prowadzić autorską kuchnię degustacyjną, w której smak, jakość i doświadczenie będą grały główną rolę.
            </p>
          </div>

          <div className={`${styles.textBox} ${styles.text2}`}>
               
            <p>
              Co miesiąc przygotuję nowe, kameralne menu degustacyjne, składające się z 4 starannie skomponowanych dań, idealnie dopasowanych do win z Winnicy Gostynka. Będę pracować na produktach sezonowych, wracając do korzeni, naturalnych smaków i jakości.
            </p>
          </div>

          <div className={`${styles.textBox} ${styles.text3}`}>
            <p>
              Chcę pokazać, że kuchnia może być <strong>doświadczeniem, emocją i zaskoczeniem.</strong> Udowodnię, że zdrowe podejście do gotowania nie musi być kojarzone z „fit kuchnią”. Otwarcie na Śląsku będzie głośne i na pewno zaskakujące.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CookingSite;