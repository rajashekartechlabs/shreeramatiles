"use client";

import Image from "next/image";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  const products = [
    {
      name: "Concrete Pavers",
      description: "Premium quality interlocking concrete pavers for driveways, pathways, and patios",
      price: "Contact for Quote",
      image: "https://images.unsplash.com/photo-1581854221997-47afb7765eab?w=500&h=500&fit=crop",
    },
    {
      name: "Parking Tiles",
      description: "Durable parking tiles designed for heavy vehicle loads and weather resistance",
      price: "Contact for Quote",
      image: "https://images.unsplash.com/photo-1581854221997-47afb7765eab?w=500&h=500&fit=crop",
    },
    {
      name: "Drainage Slabs",
      description: "High-quality drainage slabs for effective water management and flood prevention",
      price: "Contact for Quote",
      image: "https://images.unsplash.com/photo-1581854221997-47afb7765eab?w=500&h=500&fit=crop",
    },
    {
      name: "Compound Walls",
      description: "Pre-cast compound wall panels for security and aesthetic appeal",
      price: "Contact for Quote",
      image: "https://images.unsplash.com/photo-1581854221997-47afb7765eab?w=500&h=500&fit=crop",
    },
    {
      name: "Kerb Stones",
      description: "Precision-cut kerb stones for landscaping and road demarcation",
      price: "Contact for Quote",
      image: "https://images.unsplash.com/photo-1581854221997-47afb7765eab?w=500&h=500&fit=crop",
    },
    {
      name: "Precast Blocks",
      description: "Versatile precast concrete blocks for construction and landscaping projects",
      price: "Contact for Quote",
      image: "https://images.unsplash.com/photo-1581854221997-47afb7765eab?w=500&h=500&fit=crop",
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Premium Concrete Solutions for Every Project</h1>
          <p className="hero-subtitle">
            Leading manufacturer of concrete pavers, parking tiles, drainage slabs, and precast concrete products in Bengaluru
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">Get Quote Today</a>
            <a href="#products" className="btn btn-outline">View Products</a>
          </div>
        </div>
        <div className="hero-image">
          <Image
            src="https://images.unsplash.com/photo-1581854221997-47afb7765eab?w=800&h=600&fit=crop"
            alt="Concrete Pavers"
            width={600}
            height={400}
            priority
            style={{ borderRadius: "12px", objectFit: "cover" }}
          />
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="section">
        <h2 className="section-title">Our Products</h2>
        <p className="section-subtitle">
          High-quality concrete products manufactured to international standards
        </p>
        <div className="products-grid">
          {products.map((product) => (
            <ProductCard key={product.name} {...product} />
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section about-section">
        <div className="about-content">
          <h2 className="section-title">About Us</h2>
          <p className="about-text">
            Shree Rama Tiles & Pavers has been a trusted name in the concrete manufacturing industry for over a decade. 
            We specialize in producing high-quality concrete pavers, parking tiles, drainage slabs, compound walls, and 
            other precast concrete products.
          </p>
          <p className="about-text">
            Our commitment to quality, innovation, and customer satisfaction has made us a preferred choice for 
            contractors, architects, and builders across Bengaluru and surrounding regions.
          </p>
          <div className="stats">
            <div className="stat">
              <h3 className="numbers">10+</h3>
              <p>Years Experience</p>
            </div>
            <div className="stat">
              <h3 className="numbers">500+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="stat">
              <h3 className="numbers">2000+</h3>
              <p>Happy Customers</p>
            </div>
            <div className="stat">
              <h3 className="numbers">24/7</h3>
              <p>Customer Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact-section">
        <h2 className="section-title">Get in Touch</h2>
        <p className="section-subtitle">
          Contact us today for bulk orders, special projects, or any inquiries
        </p>
        <div className="contact-grid">
          <div className="contact-card">
            <h3>Phone</h3>
            <p><a href="tel:+919035501568">+91 90355 01568</a></p>
            <p><a href="tel:+917892679116">+91 78926 79116</a></p>
          </div>
          <div className="contact-card">
            <h3>Email</h3>
            <p><a href="mailto:info@shreeramatiles.com">info@shreeramatiles.com</a></p>
          </div>
          <div className="contact-card">
            <h3>Location</h3>
            <p>Sy No. 35/1, Near Byrapura Village<br />
            Arakere Village, Hesaraghatta Hobli<br />
            Yelahanka Taluk, Bengaluru<br />
            Karnataka – 562157</p>
          </div>
        </div>
      </section>
    </main>
  );
}
