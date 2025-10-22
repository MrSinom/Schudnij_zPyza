// src/pages/Regulamin.jsx
import React from "react";

function Policy () {
  return (
    <div className="container">
      <div className="inner">
        <div className="textWrapper">
          <h1>Regulamin korzystania z aplikacji</h1>

          <p>
            Niniejszy regulamin określa zasady korzystania z aplikacji
            internetowej <strong>[Nazwa aplikacji]</strong>, prowadzonej przez{" "}
            <strong>[Nazwa firmy, adres, NIP, REGON]</strong>.
          </p>

          <h2>1. Postanowienia ogólne</h2>
          <p>
            Korzystanie z aplikacji oznacza akceptację niniejszego regulaminu.
            Użytkownik zobowiązuje się do korzystania z aplikacji zgodnie z
            obowiązującym prawem i dobrymi obyczajami.
          </p>

          <h2>2. Rejestracja i dane</h2>
          <p>
            Rejestracja w aplikacji jest <strong>[dobrowolna / obowiązkowa]</strong>.
            Użytkownik zobowiązuje się do podania danych zgodnych ze stanem
            faktycznym.
          </p>

          <h2>3. Odpowiedzialność</h2>
          <p>
            Administrator nie ponosi odpowiedzialności za przerwy w działaniu
            aplikacji wynikające z przyczyn technicznych niezależnych od niego.
          </p>

          <h2>4. Dane osobowe</h2>
          <p>
            Dane osobowe przetwarzane są zgodnie z obowiązującymi przepisami
            prawa. Szczegóły znajdują się w <a href="/polityka-cookies">Polityce Cookies</a>.
          </p>

          <h2>5. Postanowienia końcowe</h2>
          <p>
            Administrator zastrzega sobie prawo do zmiany regulaminu. Zmiany
            będą publikowane na stronie aplikacji.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Policy;