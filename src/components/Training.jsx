import styles from "./Training.module.css";
import trainingImg from "../assets/maraton.jpeg"; 
import forma from "../assets/rzezba.jpeg";

function Training() {
  return (
    <section className={styles.container}>
      
      <div className={styles.inner}>
        <div className={styles.imageWrapper}>
          <img src={trainingImg} alt="Kinga - treningi personalne" />
        </div>
        
        <div className={styles.textWrapper}>
          <h1>Treningi z Pyzą</h1>
          <p>
            <strong>Trening to coś więcej niż tylko ruch to inwestycja w zdrowie, sprawność i lepsze samopoczucie.</strong> 
          </p>
          <p>
            <strong>Prowadzę indywidualne</strong>  treningi siłowe, zarówno dla osób początkujących, jak i tych, które chcą wejść na wyższy poziom. Skupiam się na prawidłowej technice, poprawie postawy oraz wzmacnianiu całego ciała, tak aby unikać bólu i kontuzji. Pomagam budować masę mięśniową, zwiększać siłę oraz przygotować organizm do większej wydolności fizycznej i wytrzymałości.Prowadzę również indywidualne treningi biegowe, dopasowane do celów klienta niezależnie od tego, czy zaczynasz swoją przygodę z bieganiem, czy przygotowujesz się do konkretnego wyzwania.
          </p>
        </div>
      
        <div className={styles.imageWrapperRight}>
          <img src={forma} alt="Kinga - forma i rzeźba" />
        </div>
        
        <div className={styles.textWrapper}>
          <p>
            <strong>Pokazuję</strong>,że siłownia to nie tylko rozbudowane sylwetki to przede wszystkim narzędzie do budowania zdrowia, sprawności i pewności siebie dla każdego, na każdym etapie.Udowadniam, że silny człowiek to zdrowy człowiek.Moje treningi są wymagające, ale dają realne i trwałe efekty. A jeśli zrobi się ciężko moje poczucie humoru pomaga przetrwać nawet najtrudniejsze serie 😉
          </p>
        </div>
      </div>
    </section>
  );
}

export default Training;