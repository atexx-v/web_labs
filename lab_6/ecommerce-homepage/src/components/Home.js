import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import ProductList from './ProductList';
import PrimaryButton from './PrimaryButton';
import { sneakers } from '../data/products'; 
import '../App.css'; 
import banner1 from '../assets/banner1.jpg'; 
import banner2 from '../assets/banner2.jpg';
import banner3 from '../assets/banner3.jpg';

const INITIAL_PRODUCTS_COUNT = 4;
const PRODUCTS_TO_LOAD = 4;

function HomePage() {
  const allSneakers = Array.isArray(sneakers) ? sneakers : [];
  
  const [visibleCount, setVisibleCount] = useState(INITIAL_PRODUCTS_COUNT);
  
  const displayedProducts = allSneakers.slice(0, visibleCount);

  const handleViewMore = (e) => {
    e.preventDefault(); 
    setVisibleCount(prevCount => Math.min(prevCount + PRODUCTS_TO_LOAD, allSneakers.length));
  };

  const hasMore = visibleCount < allSneakers.length;

  return (
    <div className="homepage-content">
      
      <div className="banner-container">
        <img src={banner1} alt="Банер 1" className="banner-img" />
        <img src={banner2} alt="Банер 2" className="banner-img" />
        <img src={banner3} alt="Банер 3" className="banner-img" />
      </div>

      <h1 className='h1'>WELCOME TO SHOES SHOP!</h1>
      <p className="welcome-text">
        Elevate your game with the perfect footwear. Discover our curated collection of 
        running, lifestyle, and classic sneakers, meticulously selected for quality and 
        style. We are dedicated to bringing you the best models from the world's leading 
        brands. Step into comfort, step into style.</p>

      <h2 className='h2'> LATEST NEWS THIS WEEK </h2>
      
      <ProductList sneakers={displayedProducts} />
      
      <div style={{textAlign: 'center', marginTop: '30px'}}>
        
        {hasMore && (
          <PrimaryButton onClick={handleViewMore} className="btn-load-more"> VIEW MORE </PrimaryButton>
        )}
      </div>
    </div>
  );
}

export default HomePage;