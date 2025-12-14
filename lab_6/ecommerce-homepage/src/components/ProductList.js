import React from 'react';
import ProductCard from './ProductCard';

function ProductList({ sneakers = [] }) { 
  
  if (sneakers.length === 0) {
    return <p style={{textAlign: 'center', color: 'var(--text-dark)', padding: '20px'}}>Already no products to display</p>;
  }

  return (
    <div className="product-list-container">
      <div className="product-list-grid">
        {sneakers.map(sneaker => (
          <ProductCard key={sneaker.id || Math.random()} sneaker={sneaker} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;