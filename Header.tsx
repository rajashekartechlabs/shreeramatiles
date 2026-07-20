"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import styles from "./Header.module.css";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={`container ${styles.headerContainer}`}>
        <Link href="/" className={styles.logo}>
          <Image src="/logo.png" alt="Logo" width={32} height={32} style={{ borderRadius: '4px' }} />
          Shree Rama <span className={styles.logoAccent}>Tiles</span>
        </Link>
        
        <nav className={`${styles.nav} ${mobileMenuOpen ? styles.navOpen : ""}`}>
          <Link href="/" className={styles.navLink} onClick={() => setMobileMenuOpen(false)}>Home</Link>
          <Link href="#products" className={styles.navLink} onClick={() => setMobileMenuOpen(false)}>Products</Link>
          <Link href="#about" className={styles.navLink} onClick={() => setMobileMenuOpen(false)}>About</Link>
          <Link href="#gallery" className={styles.navLink} onClick={() => setMobileMenuOpen(false)}>Gallery</Link>
          <Link href="#faq" className={styles.navLink} onClick={() => setMobileMenuOpen(false)}>FAQ</Link>
          <Link href="#contact" className={styles.navLink} onClick={() => setMobileMenuOpen(false)}>Contact</Link>
          
          <a href="#contact" className="btn btn-primary" onClick={() => setMobileMenuOpen(false)}>
            Get Quote
          </a>
        </nav>

        <button className={styles.mobileToggle} onClick={toggleMenu} aria-label="Toggle menu">
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
}
