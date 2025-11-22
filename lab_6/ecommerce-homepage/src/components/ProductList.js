import React from 'react';
import ProductCard from './ProductCard';
import { sneakers } from '../data/products';


function ProductList() {
  return (
    <div className="product-list-container"> 
      <div className="product-list-grid"> 
        {sneakers.map(sneaker => (
          <ProductCard key={sneaker.id} sneaker={sneaker} />
        ))}
      </div>
    </div>
  );
}
export default ProductList;