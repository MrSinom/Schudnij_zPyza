import styles from "./CookingSite.module.css";
//import cookingImg from "../assets/cooking.jpg"; // 👈 dodaj zdjęcie do assets

function CookingSite() {
  return (
    <section className={styles.container}>
      {/*<div className={styles.inner}>
        <div className={styles.imageWrapper}>
          <img src={cookingImg} alt="Kinga w kuchni" />
        </div>*/}

        <div className={styles.textWrapper}>
          <h1>Kuchnia Pyzy</h1>
          <p>
            Od czerwca obejmuję pełną odpowiedzialność za kuchnię w{" "}
            <strong>Winnicy Gostynka</strong> w Gostyni. To dla mnie ogromne
            wyróżnienie – mogę tworzyć autorskie dania, które idealnie
            komponują się z winami produkowanymi na miejscu.
          </p>
          <p>
            Przygotowuję menu degustacyjne, w którym każdy szczegół ma znaczenie
            – od doboru składników, przez technikę, aż po sposób podania.
            Moja kuchnia to prostota, elegancja i nowoczesne podejście do
            tradycyjnych smaków.
          </p>
          <p>
            Specjalizuję się również w{" "}
            <strong>serwowaniu dań podczas zamkniętych eventów degustacyjnych</strong>.
            To dla mnie coś więcej niż gotowanie – to tworzenie doświadczenia,
            w którym rytm podawania, harmonia smaków i atmosfera wieczoru
            budują niezapomniane wspomnienia.
          </p>
          <p>
            Wierzę, że kuchnia to sztuka opowiadania historii – a wino jest
            najlepszym towarzyszem tej opowieści.
          </p>
        </div>
    </section>
  );
}

export default CookingSite;