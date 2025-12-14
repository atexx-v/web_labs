import axios from 'axios';
import React from 'react';
import '../App.css';

const API_BASE_URL = 'http://localhost:3000/api'; 

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchProducts = async (filters = {}) => {
  try {
    const response = await api.get('/products', { params: filters });
    
    return Array.isArray(response.data) ? response.data : response.data.products || []; 
    
  } catch (error) {
    console.error("Error while fetching products from API:", error);
    return []; 
  }
};


export const fetchProductDetails = async (id) => {
  try {
    const response = await api.get(`/products/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error while fetching product details for ${id}:`, error);
    return null;
  }
};


function Loader() {
  return (
    <div className="loader-container">
      <div className="loader"></div>
      <p style={{marginTop: '15px', color: 'var(--primary-color)'}}>Loading products...</p>
    </div>
  );
}

export default Loader;

