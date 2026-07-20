import Image from 'next/image';
import styles from './ProductCard.module.css';

interface ProductCardProps {
  name: string;
  description: string;
  price: string;
  image: string;
}

export default function ProductCard({ name, description, price, image }: ProductCardProps) {
  const whatsappNumber = "919035501568";
  const whatsappMessage = `Hello, I am interested in the ${name}. Please share your best price.`;
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Image 
          src={image} 
          alt={name}
          fill
          className={styles.image}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{name}</h3>
        <p className={styles.description}>{description}</p>
        <p className={styles.price}>{price}</p>
        <a 
          href={whatsappLink} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn btn-primary"
          style={{ width: '100%', marginTop: '1rem' }}
        >
          Get Best Price
        </a>
      </div>
    </div>
  );
}
