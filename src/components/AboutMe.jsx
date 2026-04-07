import styles from "./AboutMe.module.css";
import profileImg from "../assets/potret_SzP.png"; 

function AboutMe(){
  return (
    <section className={styles.container}>
   
      <div className={styles.inner}>
         <h1>O mnie</h1>
           
        <div className={styles.imageWrapper}>
          <img src={profileImg} alt="Pyza - trenerka i dietetyk" />
        </div>
        

        <div className={styles.textWrapper}>
            <p>
            <strong>„Zmiana zaczyna się w głowie a ciało tylko podąża za decyzją.”</strong> 
          </p>
          
          <p>
            <strong>Hej, jestem Kinia, schudnij z Pyzą.</strong>
          </p>
          <p>
            Jestem najlepszym dowodem na to, że prawdziwa zmiana zaczyna się od decyzji.
          </p>
          <p>
           <strong>W 2022 roku rozpoczęłam </strong>swoją drogę nie tylko do utraty wagi, ale przede wszystkim do lepszego życia. Dzięki pracy nad sobą, zmianie nawyków i konsekwencji schudłam 45 kg. Ta przemiana wydarzyła się nie tylko w moim ciele, ale przede wszystkim w głowie. To właśnie ona pozwoliła mi zacząć od nowa, odnaleźć siebie i otworzyć się na zupełnie nowe możliwości.Dzięki tej drodze odkryłam nie tylko pasję, ale również sposób na życie i pracę. Dziś łączę jedno z drugim robię to, co kocham, i dzięki temu czuję się spełnionym człowiekiem.Odkryłam aktywności, które stały się częścią mojego świata bieganie, siłownię i kolarstwo. Ruch przestał być obowiązkiem, a stał się siłą, która daje mi energię, pewność siebie i poczucie sprawczości.
          </p>
            <p><strong>W 2023 roku założyłam</strong> konto na Instagramie, aby dzielić się swoją historią i inspirować innych. Pokazuję, że zdrowe odżywianie może być smaczne, ciekawe i satysfakcjonujące, a aktywność fizyczna to klucz do trwałej zmiany.
Idąc o krok dalej, w 2025 roku ukończyłam kurs trenera personalnego. Dziś nie tylko tworzę przepisy, ale również pracuję z ludźmi na siłowni wspieram ich w budowaniu siły, sprawności i pewności siebie. Najważniejsze jest dla mnie to, aby osoby, z którymi pracuję, uwierzyły w siebie i odkryły swoją własną moc.
Gotowanie stało się dla mnie czymś więcej niż pasją. Dzięki tworzeniu przepisów zarówno online, w ebookach, jak i podczas prywatnych degustacji pokazuję, że smaczna kuchnia może być jednocześnie zdrowa. Udowadniam, że dobrze skomponowane dania, odpowiedni dobór produktów i odważne łączenie smaków potrafią zaskoczyć często tak bardzo, że nikt nawet nie zauważa, że to „zdrowsza” wersja kuchniDzięki mojej działalności kulinarnej i autentyczności nawiązałam pierwsze współprace, które pozwalają mi rozwijać markę osobistą oraz tworzyć wyjątkowe doświadczenia kulinarne.</p>
<p><strong>W 2026</strong> roku planuję otwarcie kuchni degustacyjnej w moich rodzinnych stronach. Chcę pokazać, że dobra kuchnia to nie restrykcje, a balans i zdrowa równowaga  pełna smaku, jakości i zaskoczenia.


Wierzę, że każdy może zmienić swoje życie.
Wystarczy zacząć.</p>
       
        </div>
        
        {}
        <div style={{ clear: 'both' }}></div>
      </div>
    </section>
  );
}
export default AboutMe;