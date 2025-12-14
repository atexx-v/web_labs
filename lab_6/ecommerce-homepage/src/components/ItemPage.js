import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { sneakers } from '../data/products';
import PrimaryButton from './PrimaryButton';

function ItemPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const sneaker = sneakers.find(s => s.id === parseInt(id));

  
  return (
    <div className="item-detail">
      <PrimaryButton onClick={() => navigate('/catalog')} className="btn btn-details" style={{marginBottom: '20px'}}>
        &larr; BACK TO CATALOG
      </PrimaryButton>
      
      <h2>{sneaker.name}</h2>
      <div className="item-detail-content">
        <img src={sneaker.image} alt={sneaker.name} className="detail-image" />
        <div className="item-info">
          <p><strong>PRICE:</strong> <span className="product-price">${sneaker.price}</span></p>
          <p><strong>DESCRIPTION:</strong> {sneaker.description}</p>
          <p><strong>BRAND:</strong> {sneaker.brand}</p>
          <p><strong>COLOR:</strong> {sneaker.color}</p>
          <p><strong>AVAILABLE SIZES:</strong> {sneaker.sizes.join(', ')}</p>
          <PrimaryButton className="btn btn-add-to-cart" disabled style={{marginTop: '20px'}}>
            ADD TO CART
          </PrimaryButton>
        </div>
       
      </div>      
        
    </div>
  );
}
export default ItemPage;