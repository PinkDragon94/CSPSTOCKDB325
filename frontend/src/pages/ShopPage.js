import React from 'react';
import ProductCard from '../components/ProductCard';
import '../styles/ShopPage.css';

const ShopPage = () => {
  return (
    <div className="shop-page">
      <nav className="navbar">
        <h1>Stock Predictions Dashboard</h1>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/blog">Blog</a></li>
          <li><a href="/shop">Shop</a></li>
          <li><a href="/dashboard">Dashboard</a></li>
        </ul>
      </nav>
      <header className="hero">
        <h2>Shop Home Office Equipment</h2>
        <p>Find the best equipment to enhance your productivity.</p>
      </header>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <footer className="footer">
        <div className="social-media">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
        <p>&copy; {new Date().getFullYear()} Stock Predictions Dashboard. All rights reserved.</p>
      </footer>
    </div>
  );
};

const products = [
  {
    id: 1,
    name: 'Dell 27 Monitor',
    description: 'A high-performance 27" monitor with ultra-thin bezels.',
    price: '299.99',
    affiliateLink: 'https://www.amazon.com/dell-27-monitor',
    image: '/images/monitor.jpg', // Local or hosted image
  },
  {
    id: 2,
    name: 'Ergonomic Office Chair',
    description: 'Adjustable, comfortable chair for long working hours.',
    price: '199.99',
    affiliateLink: 'https://www.amazon.com/ergonomic-office-chair',
    image: '/images/chair.jpg',
  },
  {
    id: 3,
    name: 'Standing Desk',
    description: 'Height-adjustable standing desk for a healthier workspace.',
    price: '399.99',
    affiliateLink: 'https://www.amazon.com/standing-desk',
    image: '/images/desk.jpg',
  },
  {
    id: 4,
    name: 'Stock Trading Course',
    description: 'Learn stock trading from home with this ClickBank course.',
    price: '49.99',
    affiliateLink: 'https://www.clickbank.com/stock-trading-course',
    image: '/images/trading-course.jpg',
  },
];

export default ShopPage;
