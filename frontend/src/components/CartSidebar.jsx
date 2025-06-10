import React from 'react';
import PropTypes from 'prop-types';
import '../styles/cart.css';

const CartSidebar = ({ 
  isOpen, 
  closeCart, 
  cart, 
  updateQuantity, 
  removeItem, 
  cartTotal, 
  openCheckout 
}) => {
  const handleQuantityUpdate = (id, change) => {
    const item = cart.find(item => item.id === id);
    const newQuantity = item.quantity + change;
    
    // Prevent negative quantities or exceeding available stock
    if (newQuantity > 0 && newQuantity <= (item.stock || 99)) {
      updateQuantity(id, change);
    }
  };

  return (
    <div className={`cart-sidebar ${isOpen ? 'active' : ''}`}>
      <div className="cart-header">
        <h3>Your Cart {cart.length > 0 && `(${cart.reduce((sum, item) => sum + item.quantity, 0)})`}</h3>
        <button 
          className="close-cart" 
          onClick={closeCart}
          aria-label="Close cart"
        >
          &times;
        </button>
      </div>
      
      <div className="cart-items">
        {cart.length === 0 ? (
          <div className="empty-cart-message">
            <p>Your cart is empty</p>
            <button className="continue-shopping" onClick={closeCart}>
              Continue Shopping
            </button>
          </div>
        ) : (
          <div className="cart-items-list">
            {cart.map(item => (
              <div className="cart-item" key={`${item.id}-${item.quantity}`}>
                <img 
                  src={item.image} 
                  alt={item.name} 
                  onError={(e) => {
                    e.target.src = '/placeholder-product.jpg';
                  }}
                />
                <div className="cart-item-details">
                  <p className="cart-item-name">{item.name}</p>
                  <p className="cart-item-price">
                    ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                  </p>
                  {item.stock && (
                    <p className="stock-info">
                      {item.quantity >= item.stock ? (
                        <span className="low-stock">Only {item.stock} left!</span>
                      ) : (
                        <span>{item.stock} available</span>
                      )}
                    </p>
                  )}
                  <div className="cart-item-quantity">
                    <button
                      className="quantity-btn minus"
                      onClick={() => handleQuantityUpdate(item.id, -1)}
                      disabled={item.quantity <= 1}
                      aria-label="Decrease quantity"
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      className="quantity-btn plus"
                      onClick={() => handleQuantityUpdate(item.id, 1)}
                      disabled={item.stock && item.quantity >= item.stock}
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  className="remove-item"
                  onClick={() => removeItem(item.id)}
                  aria-label="Remove item"
                >
                  <i className="fas fa-trash"></i>
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {cart.length > 0 && (
        <div className="cart-footer">
          <div className="cart-total">
            <p>Subtotal: <span>₹{cartTotal.toLocaleString('en-IN')}</span></p>
            <p className="shipping-note">Shipping calculated at checkout</p>
          </div>
          <button
            className="checkout-btn"
            onClick={openCheckout}
            disabled={cart.length === 0}
          >
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

CartSidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeCart: PropTypes.func.isRequired,
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
      image: PropTypes.string,
      stock: PropTypes.number
    })
  ).isRequired,
  updateQuantity: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
  cartTotal: PropTypes.number.isRequired,
  openCheckout: PropTypes.func.isRequired
};

export default CartSidebar;