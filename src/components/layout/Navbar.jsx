import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navigation } from "../../data/navigation";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const scrollTo = (id) => {
    setMenuOpen(false);

    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
      <div className="wrap navbar-container">
        <button
          onClick={() => scrollTo("top")}
          className="font-display navbar-logo"
        >
          Ahmad
          <span>.</span>
        </button>

        <div className="nav-desktop">
          {navigation.map((item) => (
            <button
              key={item.id}
              className="nav-link"
              onClick={() => scrollTo(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>

        <button
          className="btn-desktop navbar-contact-button"
          onClick={() => scrollTo("kontak")}
        >
          <span className="btn-primary navbar-contact-inner">Hubungi Saya</span>
        </button>

        <button
          aria-label="Menu"
          onClick={() => setMenuOpen((value) => !value)}
          className="menu-toggle"
        >
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <div className="mobile-menu-inner">
          {navigation.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="mobile-nav-link"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
