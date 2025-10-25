// src/components/Header.jsx
import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styles from "./Header.module.css";
import logo from "../assets/name_withoutLOGO.svg";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  const handleHoverNavigate = (path) => {
    if (!isMobile) navigate(path);
  };

  return (
    <header className={styles.header}>
      <div className={styles.navbar}>
        <div
          className={styles.logo}
          onMouseEnter={() => handleHoverNavigate("/")}
          onClick={() => navigate("/")}
        >
          <img src={logo} alt="Logo" />
        </div>

        <button
  className={`${styles.hamburger} ${menuOpen ? styles.open : ""}`}
  onClick={toggleMenu}
  aria-label="menu"
  aria-expanded={menuOpen}
>
<span className={styles.line}></span>
<span className={styles.line}></span>
<span className={styles.line}></span>

        </button>

        <nav className={`${styles.navLinks} ${menuOpen ? styles.open : ""}`}>
          <NavLink
            to="/about"
            className={styles.link}
            onMouseEnter={() => handleHoverNavigate("/about")}
            onClick={closeMenu}
          >
            O mnie
          </NavLink>
          <NavLink
            to="/training"
            className={styles.link}
            onMouseEnter={() => handleHoverNavigate("/training")}
            onClick={closeMenu}
          >
            Treningi
          </NavLink>
          <NavLink
            to="/ebook"
            className={styles.link}
            onMouseEnter={() => handleHoverNavigate("/ebook")}
            onClick={closeMenu}
          >
            E-book
          </NavLink>
          <NavLink
            to="/cooking"
            className={styles.link}
            onMouseEnter={() => handleHoverNavigate("/cooking")}
            onClick={closeMenu}
          >
            Kuchnia
          </NavLink>
          <NavLink
            to="/contact"
            className={styles.link}
            onMouseEnter={() => handleHoverNavigate("/contact")}
            onClick={closeMenu}
          >
            Kontakt
          </NavLink>
        </nav>

        <NavLink
          to="/login"
          className={styles.login}
          onMouseEnter={() => handleHoverNavigate("/login")}
          onClick={closeMenu}
        >
          Zaloguj
        </NavLink>
      </div>
    </header>
  );
}

export default Header;