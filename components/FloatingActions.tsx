import { MessageCircle, Phone } from 'lucide-react';
import styles from './FloatingActions.module.css';

export default function FloatingActions() {
  const whatsappNumber = "919035501568";
  
  return (
    <div className={styles.floatingContainer}>
      <a 
        href={`https://wa.me/${whatsappNumber}`} 
        target="_blank" 
        rel="noopener noreferrer"
        className={styles.whatsappBtn}
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={28} />
      </a>
      <a 
        href="tel:+919035501568" 
        className={styles.mobileCallBtn}
        aria-label="Call Now"
      >
        <Phone size={24} />
      </a>
    </div>
  );
}
