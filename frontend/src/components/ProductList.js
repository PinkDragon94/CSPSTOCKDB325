// src/components/ProductList.js
import React from 'react';
import ProductCard from './ProductCard';

const products = [
  {
    name: 'Ergonomic Chair',
    description: 'Comfortable office chair for long hours of trading.',
    price: 199.99,
    image: 'https://via.placeholder.com/150',
    amazonLink: 'https://www.amazon.com/dp/example-chair',
    clickBankLink: '',
  },
  {
    name: 'Ultra-Wide Monitor',
    description: 'A wide monitor for efficient trading setup.',
    price: 499.99,
    image: 'https://via.placeholder.com/150',
    amazonLink: 'https://www.amazon.com/dp/example-monitor',
    clickBankLink: '',
  },
  {
    name: 'Standing Desk',
    description: 'Adjustable desk for sitting or standing while working.',
    price: 349.99,
    image: 'https://via.placeholder.com/150',
    amazonLink: 'https://www.amazon.com/dp/example-desk',
    clickBankLink: '',
  },
  {
    name: 'Stock Trading Guide',
    description: 'Comprehensive guide to setting up a home trading office.',
    price: 29.99,
    image: 'https://via.placeholder.com/150',
    amazonLink: '',
    clickBankLink: 'https://www.clickbank.com/example-guide',
  },
];

const ProductList = () => {
  return (
    <div className="product-list">
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
