import React from 'react';
import ProductList from './ProductList';
import { sneakers } from '../data/products';
import { Link } from 'react-router-dom';
import banner1 from '../assets/banner1.jpg'; 
import banner2 from '../assets/banner2.jpg';
import banner3 from '../assets/banner3.jpg';

function Home() {
const featuredProducts = sneakers.slice(-4);  return (
    <>

      <div className="full-width-banners">
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

      <h2 className='h2'>LATEST NEWS THIS WEEK</h2>
      <ProductList products={featuredProducts} />
      <div style={{textAlign: 'center', marginTop: '30px'}}>
        <Link to="/catalog" className="btn btn-details">
          VIEW FULL CATALOG
        </Link>
      </div>
    </>
  );
}
export default Home;