import React from 'react';
import ProductCard from './ProductCard';

function ProductList({ products }) {
  return (
    <div className="product-list-container">
      <div className="product-list-grid">
        {products.map(sneaker => (
          <ProductCard key={sneaker.id} sneaker={sneaker} />
        ))}
      </div>
    </div>
  );
}
export default ProductList;