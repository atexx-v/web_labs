import React from 'react';
import { Link } from 'react-router-dom';
import PrimaryButton from './PrimaryButton';

function ProductCard({ sneaker }) {
  if (!sneaker) return null;
  
  const sizeList = sneaker.sizes && sneaker.sizes.length > 0 
    ? sneaker.sizes.join(', ') 
    : 'Out of stock';
  
  return (
    <div className="product-card">
      <img src={sneaker.image} alt={sneaker.name} className="product-image" />
      
      <div className="card-body">
        
        <h3 className="product-name">{sneaker.name}</h3>
        
        <p className="product-sizes-display">
          {sizeList}
        </p>
        
        <div className="product-price-section">
          <span className="product-price">${sneaker.price}</span>
        </div>

        <div className="card-actions">
          <PrimaryButton className="btn btn-add-to-cart" disabled>
            ADD TO CART
          </PrimaryButton>
          <Link to={`/item/${sneaker.id}`} className="btn btn-details">
            DETAILS
          </Link>
        </div>
      </div>
    </div>
  );
}
export default ProductCard;