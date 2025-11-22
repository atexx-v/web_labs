import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { sneakers } from '../data/products';

function ItemPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const sneaker = sneakers.find(s => s.id === parseInt(id));

  if (!sneaker) {
    return <h1>404: ITEM NOT FOUND</h1>;
  }
  
  return (
    <div className="item-detail">
      <button onClick={() => navigate('/catalog')} className="btn btn-details" style={{marginBottom: '20px'}}>
        &larr; BACK TO CATALOG
      </button>
      
      <h2>{sneaker.name}</h2>
      <div className="item-detail-content">
        <img src={sneaker.image} alt={sneaker.name} className="detail-image" />
        <div className="item-info">
          <p><strong>PRICE:</strong> <span className="product-price">${sneaker.price}</span></p>
          <p><strong>DESCRIPTION:</strong> {sneaker.description}</p>
          <p><strong>BRAND:</strong> {sneaker.brand}</p>
          <p><strong>COLOR:</strong> {sneaker.color}</p>
          <p><strong>AVAILABLE SIZES:</strong> {sneaker.sizes.join(', ')}</p>
          <button className="btn btn-add-to-cart" disabled style={{marginTop: '20px'}}>
            ADD TO CART
          </button>
        </div>
       
      </div>      
        
    </div>
  );
}
export default ItemPage;