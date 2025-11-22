// src/App.js
import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import './App.css'; 

function App() {
  return (
    <div className="app-layout">
      <Header />
      <Navigation />
      
      <main className="main-content">
        <h2>Хіти продажу</h2>
        <ProductList />
      </main>

      <Footer />
    </div>
  );
}

export default App;