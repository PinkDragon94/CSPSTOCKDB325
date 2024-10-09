// src/components/ProductCard.js
import React from 'react';
import './ProductCard.css'; // Ensure you have basic styling here

const ProductCard = ({ product }) => {
  const { name, description, price, image, amazonLink, clickBankLink } = product;

  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />
      <div className="product-info">
        <h3>{name}</h3>
        <p>{description}</p>
        <p className="product-price">${price}</p>
        <div className="product-buttons">
          {amazonLink && (
            <a href={amazonLink} target="_blank" rel="noopener noreferrer" className="buy-button">
              Buy on Amazon
            </a>
          )}
          {clickBankLink && (
            <a href={clickBankLink} target="_blank" rel="noopener noreferrer" className="buy-button">
              Buy on ClickBank
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
