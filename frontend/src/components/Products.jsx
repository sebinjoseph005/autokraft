import React from 'react';
import { products } from '../products';
import '../styles/products.css';

const Products = ({ addToCart }) => {
  return (
    <section id="products" className="products">
      <h2>Our Products</h2>
      <div className="product-grid">
        {products.map(product => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-info">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-price">
                ₹{product.price.toLocaleString('en-IN')}
              </p>
              <button 
                className="add-to-cart" 
                onClick={() => addToCart(product)}
              >
                <i className="fas fa-plus"></i> Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;