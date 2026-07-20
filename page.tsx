"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ChevronDown, PackageCheck, Factory, Truck, HardHat, Box } from "lucide-react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FloatingActions from "./components/FloatingActions";
import ProductCard from "./components/ProductCard";
import styles from "./page.module.css";

// Sample Data
const products = [
  { id: 1, category: "Drainage", name: "Drainage Slab", description: "Heavy-duty drainage slabs for residential and commercial drainage systems.", price: "₹80 / Sq.ft", image: "https://images.unsplash.com/photo-1590496739669-d41a87e5b206?auto=format&fit=crop&q=80&w=800" },
  { id: 2, category: "Compound Walls", name: "Readymade Compound Wall", description: "Strong precast compound wall panels with quick installation.", price: "₹90 / Sq.ft", image: "https://images.unsplash.com/photo-1518599904199-0ca897819ddb?auto=format&fit=crop&q=80&w=800" },
  { id: 3, category: "Parking Tiles", name: "Parking Tiles", description: "Durable parking tiles for heavy vehicle movement.", price: "₹30 / Sq.ft", image: "https://images.unsplash.com/photo-1621295982823-3b320d43f07a?auto=format&fit=crop&q=80&w=800" },
  { id: 4, category: "Pavers", name: "I Shape Paver (60mm)", description: "Perfect for driveways, pathways and commercial projects.", price: "₹40 / Sq.ft", image: "https://images.unsplash.com/photo-1591825729269-caeb344f6df2?auto=format&fit=crop&q=80&w=800" },
  { id: 5, category: "Pavers", name: "Zig Zag Paver (60mm)", description: "Premium interlocking paving blocks.", price: "₹40 / Sq.ft", image: "https://images.unsplash.com/photo-1563721381273-cd56cfbf575d?auto=format&fit=crop&q=80&w=800" },
  { id: 6, category: "Pavers", name: "Zig Zag Paver (80mm)", description: "Heavy-duty industrial paving blocks.", price: "₹50 / Sq.ft", image: "https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&q=80&w=800" },
  { id: 7, category: "Pavers", name: "Square Paver (8×8)", description: "Modern outdoor paving solution.", price: "₹45 / Sq.ft", image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800" },
  { id: 8, category: "Pavers", name: "Rectangle Paver (4×8)", description: "Premium rectangular paving blocks.", price: "₹48 / Sq.ft", image: "https://images.unsplash.com/photo-1587582423116-ec072928c0db?auto=format&fit=crop&q=80&w=800" },
  { id: 9, category: "Pavers", name: "Grass Paver (60mm)", description: "Eco-friendly landscaping pavers.", price: "₹60 / Sq.ft", image: "https://images.unsplash.com/photo-1598516086650-7058fb6f5923?auto=format&fit=crop&q=80&w=800" },
  { id: 10, category: "Pavers", name: "Grass Paver (80mm)", description: "Heavy-duty grass pavers.", price: "₹70 / Sq.ft", image: "https://images.unsplash.com/photo-1558904541-efa843a96f09?auto=format&fit=crop&q=80&w=800" },
  { id: 11, category: "Accessories", name: "Cover Blocks", description: "Concrete cover blocks for reinforcement.", price: "₹140 / 100 Pieces", image: "https://images.unsplash.com/photo-1588691515152-f47ff9ad326a?auto=format&fit=crop&q=80&w=800" },
  { id: 12, category: "Accessories", name: "Curb", description: "Durable concrete curb stones.", price: "₹170 / Piece", image: "https://images.unsplash.com/photo-1597843444855-8d5ec4294ce7?auto=format&fit=crop&q=80&w=800" },
  { id: 13, category: "Accessories", name: "Curb Saucer Drain", description: "Precast curb drainage solution.", price: "₹170 / Piece", image: "https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?auto=format&fit=crop&q=80&w=800" },
];

const categories = ["All Products", "Pavers", "Parking Tiles", "Drainage", "Compound Walls", "Accessories"];

const faqs = [
  { q: "Do you provide bulk discounts?", a: "Yes. We offer attractive pricing for bulk orders." },
  { q: "Which areas do you supply?", a: "We supply across Bengaluru and nearby regions." },
  { q: "Do you manufacture all products yourself?", a: "Yes. All products are manufactured in our own facility." },
  { q: "Can I place custom quantity orders?", a: "Yes. We can accommodate custom quantity orders." },
  { q: "Do you provide delivery?", a: "Yes. Delivery is available depending on location and order quantity." },
  { q: "Which payment methods are accepted?", a: "Cash, UPI and Bank Transfer." },
];

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("All Products");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const filteredProducts = activeCategory === "All Products" 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <>
      <Header />
      <FloatingActions />
      
      <main>
        {/* Hero Section */}
        <section id="home" className={styles.hero}>
          <div className="container">
            <div className={styles.heroContent}>
              <motion.h1 
                className={styles.heroTitle}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Premium Concrete Tiles, Pavers & Precast Solutions
              </motion.h1>
              <motion.p 
                className={styles.heroSubtitle}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Trusted manufacturer of premium concrete paving blocks, drainage slabs, compound walls and precast concrete products for residential, commercial and industrial projects across Bengaluru.
              </motion.p>
              
              <motion.div 
                className={styles.heroActions}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <a href="#contact" className="btn btn-primary">Get Quote</a>
                <a href="tel:+919035501568" className="btn btn-outline">Call Now</a>
              </motion.div>
              
              <motion.div 
                className={styles.trustBadges}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <div className={styles.badge}><CheckCircle2 className={styles.badgeIcon} size={20} /> Factory Direct</div>
                <div className={styles.badge}><CheckCircle2 className={styles.badgeIcon} size={20} /> Premium Quality</div>
                <div className={styles.badge}><CheckCircle2 className={styles.badgeIcon} size={20} /> Bulk Orders</div>
                <div className={styles.badge}><CheckCircle2 className={styles.badgeIcon} size={20} /> Fast Delivery</div>
              </motion.div>
              
              <motion.div 
                className={styles.heroStats}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>500+</span>
                  <span className={styles.statLabel}>Projects Supplied</span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>1000+</span>
                  <span className={styles.statLabel}>Happy Customers</span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>10+</span>
                  <span className={styles.statLabel}>Product Categories</span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>100%</span>
                  <span className={styles.statLabel}>Quality Checked</span>
                </div>
              </motion.div>
            </div>
          </div>
          
          <div style={{ position: 'absolute', top: 0, right: 0, width: '50%', height: '100%', zIndex: 1, opacity: 0.2 }}>
             <Image src="https://images.unsplash.com/photo-1591825729269-caeb344f6df2?auto=format&fit=crop&q=80&w=1200" alt="Pavers Background" fill style={{ objectFit: 'cover' }} />
          </div>
        </section>

        {/* About Section */}
        <section id="about" className={`${styles.section} ${styles.aboutSection}`}>
          <div className={`container ${styles.aboutGrid}`}>
            <div className={styles.aboutContent}>
              <h2 className="section-title" style={{ textAlign: 'left' }}>About Shree Rama Tiles & Pavers Manufacturers</h2>
              <p>
                Shree Rama Tiles & Pavers Manufacturers is a trusted manufacturer of premium concrete paving solutions based in Bengaluru. We specialize in manufacturing durable paving blocks, parking tiles, drainage slabs, precast compound walls and other concrete products using quality raw materials and modern production techniques.
              </p>
              <p>
                Our products are widely used in residential layouts, villas, commercial complexes, factories, warehouses, parking areas, walkways, roads and landscaping projects.
              </p>
              <p>
                Our commitment to quality, competitive pricing and timely delivery has made us a preferred choice among builders, contractors and developers.
              </p>
            </div>
            <div style={{ position: 'relative', height: '400px', borderRadius: '16px', overflow: 'hidden' }}>
              <Image src="https://images.unsplash.com/photo-1504307651254-35680f356f58?auto=format&fit=crop&q=80&w=800" alt="Factory" fill style={{ objectFit: 'cover' }} />
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section id="products" className={`${styles.section} ${styles.productsSection}`}>
          <div className="container">
            <h2 className="section-title">Our Premium Products</h2>
            <div className={styles.filterContainer}>
              {categories.map((category) => (
                <button 
                  key={category}
                  className={`${styles.filterBtn} ${activeCategory === category ? styles.active : ''}`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
            
            <motion.div layout className={styles.productsGrid}>
              <AnimatePresence>
                {filteredProducts.map((product) => (
                  <motion.div
                    key={product.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ProductCard {...product} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className={`${styles.section} ${styles.whyUsSection}`}>
          <div className="container">
            <h2 className="section-title">Why Choose Us</h2>
            <div className={styles.featuresGrid}>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}><Factory color="var(--accent)" /></div>
                <h3 className={styles.featureTitle}>Factory Direct Pricing</h3>
                <p style={{ color: 'var(--secondary-text)' }}>Cut out the middleman and get the best prices directly from the manufacturer.</p>
              </div>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}><PackageCheck color="var(--accent)" /></div>
                <h3 className={styles.featureTitle}>Premium Quality Concrete</h3>
                <p style={{ color: 'var(--secondary-text)' }}>We use high-grade materials to ensure maximum strength and durability.</p>
              </div>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}><Truck color="var(--accent)" /></div>
                <h3 className={styles.featureTitle}>Fast Delivery</h3>
                <p style={{ color: 'var(--secondary-text)' }}>Reliable and timely transportation to your project site across Bengaluru.</p>
              </div>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}><HardHat color="var(--accent)" /></div>
                <h3 className={styles.featureTitle}>Trusted by Builders</h3>
                <p style={{ color: 'var(--secondary-text)' }}>Preferred choice for major contractors, architects, and developers.</p>
              </div>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}><Box color="var(--accent)" /></div>
                <h3 className={styles.featureTitle}>Bulk Orders Accepted</h3>
                <p style={{ color: 'var(--secondary-text)' }}>We have the capacity to handle large-scale requirements seamlessly.</p>
              </div>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}><CheckCircle2 color="var(--accent)" /></div>
                <h3 className={styles.featureTitle}>Modern Manufacturing</h3>
                <p style={{ color: 'var(--secondary-text)' }}>Utilizing advanced techniques for consistent finish and strength.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Bulk Quote */}
        <section className={`${styles.section} ${styles.bulkQuoteSection}`}>
          <div className="container">
            <h2 className="section-title" style={{ color: 'white' }}>Request a Bulk Quote</h2>
            <p className="section-subtitle" style={{ color: '#9ca3af' }}>
              Whether you are a contractor, builder, architect or developer, we offer factory-direct pricing for bulk orders.
            </p>
            <div className={styles.bulkActions}>
              <a href="#contact" className="btn btn-primary">Get Bulk Quote</a>
              <a href="https://wa.me/919035501568?text=Hello,%20I%20would%20like%20to%20request%20a%20bulk%20quote." target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ borderColor: 'white', color: 'white' }}>WhatsApp</a>
              <a href="tel:+919035501568" className="btn btn-outline" style={{ borderColor: 'white', color: 'white' }}>Call Now</a>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className={`${styles.section} ${styles.processSection}`}>
          <div className="container">
            <h2 className="section-title">How It Works</h2>
            <div className={styles.processGrid}>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>1</div>
                <h3 className={styles.stepTitle}>Select Product</h3>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>2</div>
                <h3 className={styles.stepTitle}>Request Quote</h3>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>3</div>
                <h3 className={styles.stepTitle}>Receive Best Price</h3>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>4</div>
                <h3 className={styles.stepTitle}>Fast Delivery</h3>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className={`${styles.section} ${styles.gallerySection}`}>
          <div className="container">
            <h2 className="section-title">Project Gallery</h2>
            <div className={styles.masonryGrid}>
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className={styles.galleryItem}>
                  <img src={`https://images.unsplash.com/photo-1587582423116-ec072928c0db?auto=format&fit=crop&q=80&w=600&h=${item % 2 === 0 ? '800' : '500'}`} alt="Gallery Image" className={styles.galleryImg} loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className={`${styles.section} ${styles.faqSection}`}>
          <div className="container">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <div className={styles.faqContainer}>
              {faqs.map((faq, index) => (
                <div key={index} className={styles.faqItem}>
                  <div className={styles.faqQuestion} onClick={() => setOpenFaq(openFaq === index ? null : index)}>
                    {faq.q}
                    <ChevronDown 
                      style={{ transform: openFaq === index ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }} 
                      color="var(--accent)" 
                    />
                  </div>
                  <AnimatePresence>
                    {openFaq === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        style={{ overflow: "hidden" }}
                      >
                        <div className={styles.faqAnswer}>{faq.a}</div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className={`${styles.section} ${styles.testimonialsSection}`}>
          <div className="container">
            <h2 className="section-title">What Our Clients Say</h2>
            <div className={styles.testimonialsGrid}>
              <div className={styles.testimonialCard}>
                <p className={styles.testimonialText}>"Excellent quality paving blocks! The strength and finish are exactly what we needed for our commercial project. Highly recommend Shree Rama Tiles."</p>
                <p className={styles.testimonialAuthor}>- Rakesh Gowda, Contractor</p>
              </div>
              <div className={styles.testimonialCard}>
                <p className={styles.testimonialText}>"Very professional team. They offered the best bulk pricing in Bengaluru and delivered the materials right on schedule without any damage."</p>
                <p className={styles.testimonialAuthor}>- Suresh Kumar, Builder</p>
              </div>
              <div className={styles.testimonialCard}>
                <p className={styles.testimonialText}>"We have been sourcing compound walls and parking tiles from them for two years. Consistent quality and great customer service every single time."</p>
                <p className={styles.testimonialAuthor}>- Ananya Constructions</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className={`${styles.section} ${styles.contactSection}`}>
          <div className="container">
            <h2 className="section-title">Contact Us</h2>
            <div className={styles.contactGrid}>
              <div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--primary)' }}>Get in Touch</h3>
                <p style={{ color: 'var(--secondary-text)', marginBottom: '2rem' }}>Fill out the form and our team will get back to you with the best quote for your requirements.</p>
                <div style={{ width: '100%', height: '300px', borderRadius: '16px', overflow: 'hidden' }}>
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m3!1d3885.6606041075796!2d77.5255!3d13.1208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDA3JzE0LjkiTiA3N8KwMzEnMzEuOCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                  />
                </div>
              </div>
              
              <div className={styles.contactForm}>
                <form onSubmit={(e) => e.preventDefault()}>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Name</label>
                    <input type="text" className={styles.formInput} placeholder="Your Name" required />
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Phone Number</label>
                    <input type="tel" className={styles.formInput} placeholder="Your Phone Number" required />
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>Product Interested</label>
                      <input type="text" className={styles.formInput} placeholder="e.g. Zig Zag Pavers" />
                    </div>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>Quantity</label>
                      <input type="text" className={styles.formInput} placeholder="e.g. 5000 Sq.ft" />
                    </div>
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Location</label>
                    <input type="text" className={styles.formInput} placeholder="Project Location" />
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Message</label>
                    <textarea className={styles.formTextarea} placeholder="Additional Details..."></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Request Quote</button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
