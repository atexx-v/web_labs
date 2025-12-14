import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 

import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

import HomePage from './components/Home'; 
import CatalogPage from './components/CatalogPage';
import ItemPage from './components/ItemPage';

import './App.css'; 

function App() {
  return (
    <Router>
      <div className="app-layout">
        <Header />
        <Navigation />
        
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} /> 
            
            <Route path="/catalog" element={<CatalogPage />} />
            
            <Route path="/item/:id" element={<ItemPage />} /> 
            
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;