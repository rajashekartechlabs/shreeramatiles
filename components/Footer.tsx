import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerGrid}`}>
        <div className={styles.footerCol}>
          <h3 className={styles.logo}>
            <Image src="/logo.png" alt="Logo" width={32} height={32} style={{ borderRadius: '4px' }} />
            Shree Rama <span className={styles.logoAccent}>Tiles</span>
          </h3>
          <p className={styles.text}>Leading manufacturer of concrete pavers, parking tiles, drainage slabs, compound walls and precast concrete products in Bengaluru.</p>
          <div className={styles.socials}>
            <a href="#" className={styles.socialIcon} aria-label="Facebook"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
            <a href="#" className={styles.socialIcon} aria-label="Twitter"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></a>
            <a href="#" className={styles.socialIcon} aria-label="Instagram"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a>
            <a href="#" className={styles.socialIcon} aria-label="LinkedIn"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
          </div>
        </div>

        <div className={styles.footerCol}>
          <h4 className={styles.colTitle}>Quick Links</h4>
          <ul className={styles.linksList}>
            <li><Link href="/" className={styles.link}>Home</Link></li>
            <li><Link href="#products" className={styles.link}>Products</Link></li>
            <li><Link href="#about" className={styles.link}>About Us</Link></li>
            <li><Link href="#gallery" className={styles.link}>Gallery</Link></li>
            <li><Link href="#faq" className={styles.link}>FAQ</Link></li>
          </ul>
        </div>

        <div className={styles.footerCol}>
          <h4 className={styles.colTitle}>Working Hours</h4>
          <ul className={styles.linksList}>
            <li className={styles.text}>Monday - Saturday:</li>
            <li className={styles.text}><strong>9:00 AM - 6:00 PM</strong></li>
            <li className={styles.text} style={{ marginTop: '0.5rem' }}>Sunday:</li>
            <li className={styles.text}><strong>Closed</strong></li>
          </ul>
        </div>

        <div className={styles.footerCol}>
          <h4 className={styles.colTitle}>Contact Details</h4>
          <ul className={styles.linksList}>
            <li className={styles.contactItem}>
              <Phone size={18} className={styles.contactIcon} />
              <div className={styles.contactText}>
                <a href="tel:+919035501568" className={styles.link}>+91 90355 01568</a>
                <a href="tel:+917892679116" className={styles.link}>+91 78926 79116</a>
              </div>
            </li>
            <li className={styles.contactItem}>
              <Mail size={18} className={styles.contactIcon} />
              <a href="mailto:info@shreeramatiles.com" className={styles.link}>info@shreeramatiles.com</a>
            </li>
            <li className={styles.contactItem}>
              <MapPin size={18} className={styles.contactIcon} style={{ flexShrink: 0 }} />
              <span className={styles.text}>
                Sy No. 35/1, Near Byrapura Village, Arakere Village, Hesaraghatta Hobli, Yelahanka Taluk, Bengaluru, Karnataka – 562157
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.copyright}>
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Shree Rama Tiles & Pavers Manufacturers. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
