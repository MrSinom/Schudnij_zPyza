import { useState, useEffect, useRef } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import styles from "./Header.module.css";
import logo from "../assets/name_withoutLOGO.svg";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navRef = useRef(null);
  const hamburgerRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // close mobile menu whenever route changes (including swipe navigation)
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // ensure we never set aria-hidden on an ancestor while a descendant keeps focus
  useEffect(() => {
    if (!navRef.current) return;

    if (!menuOpen && isMobile) {
      // if focus is inside nav, move it to hamburger before hiding
      const active = document.activeElement;
      if (navRef.current.contains(active)) {
        hamburgerRef.current?.focus();
      }
      // set aria-hidden after ensuring focus moved
      navRef.current.setAttribute("aria-hidden", "true");
    } else {
      navRef.current.setAttribute("aria-hidden", "false");
    }
    // optional: add inert when supported
    if (typeof navRef.current.inert !== "undefined") {
      navRef.current.inert = !menuOpen && isMobile;
    }
  }, [menuOpen, isMobile]);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  const handleHoverNavigate = (path) => {
    if (!isMobile) navigate(path);
  };

  const onHamburgerKey = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleMenu();
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.navbar}>
        <div
          className={styles.logo}
          onMouseEnter={() => handleHoverNavigate("/")}
          onClick={() => navigate("/")}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter") navigate("/");
          }}
          aria-label="Home"
        >
          <img src={logo} alt="Logo" />
        </div>

        <button
          ref={hamburgerRef}
          className={`${styles.hamburger} ${menuOpen ? styles.open : ""}`}
          onClick={toggleMenu}
          onKeyDown={onHamburgerKey}
          aria-label="menu"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
        >
          <span className={styles.line} />
          <span className={styles.line} />
          <span className={styles.line} />
        </button>

        <nav
          id="primary-navigation"
          ref={navRef}
          className={`${styles.navLinks} ${menuOpen ? styles.open : ""}`}
        >
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `${styles.link} ${isActive ? styles.active : ""}`
            }
            onMouseEnter={() => handleHoverNavigate("/about")}
            onClick={closeMenu}
          >
            O mnie
          </NavLink>

          <NavLink
            to="/training"
            className={({ isActive }) =>
              `${styles.link} ${isActive ? styles.active : ""}`
            }
            onMouseEnter={() => handleHoverNavigate("/training")}
            onClick={closeMenu}
          >
            Treningi
          </NavLink>

          <NavLink
            to="/ebook"
            className={({ isActive }) =>
              `${styles.link} ${isActive ? styles.active : ""}`
            }
            onMouseEnter={() => handleHoverNavigate("/ebook")}
            onClick={closeMenu}
          >
            E-book
          </NavLink>

          <NavLink
            to="/cooking"
            className={({ isActive }) =>
              `${styles.link} ${isActive ? styles.active : ""}`
            }
            onMouseEnter={() => handleHoverNavigate("/cooking")}
            onClick={closeMenu}
          >
            Kuchnia
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `${styles.link} ${isActive ? styles.active : ""}`
            }
            onMouseEnter={() => handleHoverNavigate("/contact")}
            onClick={closeMenu}
          >
            Kontakt
          </NavLink>
        </nav>

        <NavLink
          to="/login"
          className={({ isActive }) =>
            `${styles.login} ${isActive ? styles.active : ""}`
          }
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
