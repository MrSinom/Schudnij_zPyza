import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <h2>Schudnij z Pyzą</h2>
          <p>Zdrowy styl życia bez spiny.</p>
        </div>

        <nav className={styles.nav}>
          <a href="#about">O mnie</a>
          <a href="#training">Treningi</a>
          <a href="#ebook">E-book</a>
          <a href="#cooking">Kuchnia</a>
          <a href="#contact">Kontakt</a>
        </nav>

        <div className={styles.copy}>
          <p>© {new Date().getFullYear()} Schudnij z Pyzą. Wszelkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;