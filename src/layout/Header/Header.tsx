import "@/layout/Header/Header.css";
import { useState, useEffect } from "react";

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className={scrolled ? "header scrolled" : "header"}>
      <button className="logo">Oasis</button>
      <nav className="nav-links">
        <button onClick={() => scrollToSection("hero")}>Home</button>
        <button onClick={() => scrollToSection("flavors")}>Flavors</button>
        <button onClick={() => scrollToSection("about")}>About</button>
      </nav>
      <button className="cta">Order Now</button>
    </header>
  );
}

export default Header;
