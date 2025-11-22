import React from 'react';

function ProductCard({ sneaker }) {
  if (!sneaker) {
    return <div className="product-card">Товар не знайдено.</div>;
  }
  
  return (
    <div className="product-card">
      
      <img src={sneaker.image} alt={sneaker.name} className="product-image"/>
      
      <div className="card-body">
        <h3 className="product-name">{sneaker.name}</h3>
        <p className="product-description">{sneaker.description}</p>
        <div className="product-price-section">
          <span className="product-price">${sneaker.price}</span>
       </div>

        <div className="card-actions">
          <button className="btn btn-add-to-cart" disabled>
            Додати в кошик
          </button>
          <button className="btn btn-details" disabled>
            Деталі
          </button>
        </div>
        
      </div>
    </div>
  );
}

export default ProductCard;