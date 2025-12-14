import React, { useState, useEffect, useMemo } from 'react';
import ProductList from './ProductList';
import Select from './Select';
import Loader from './Loader';
import { fetchProducts } from '../services/apiService';

function CatalogPage() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true); 
  const [error, setError] = useState(null);

  const [searchTerm, setSearchTerm] = useState('');
  const [filterColor, setFilterColor] = useState('');
  const [filterBrand, setFilterBrand] = useState('');
  const [filterSize, setFilterSize] = useState('');

  useEffect(() => {
    const loadProducts = async () => {
      setIsLoading(true);
      setError(null);

      const currentFilters = {
        search: searchTerm,
        brand: filterBrand,
        size: filterSize,
        color: filterColor,
      };

      try {
        // AXIOS-СЕРВІС
        const data = await fetchProducts(currentFilters);
        setProducts(data);
        if (data.length === 0) {
             setError("Products not found for your query");
        }
      } catch (err) {
        setError("Failed to load products. Check backend server");
      } finally {
        setIsLoading(false); 
      }
    };

    const debounceTimeout = setTimeout(() => {
        loadProducts();
    }, 500); 

    return () => clearTimeout(debounceTimeout);
    
  }, [searchTerm, filterBrand, filterSize, filterColor]);


  const availableOptions = useMemo(() => {
    const allBrands = new Set();
    const allColors = new Set();
    const allSizes = new Set();
    
    (products || []).forEach(p => { 
        if (p.brand) allBrands.add(p.brand);
        if (p.color) allColors.add(p.color);
        if (p.sizes && Array.isArray(p.sizes)) {
            p.sizes.forEach(size => allSizes.add(size));
        }
    });

    return {
        brands: Array.from(allBrands),
        colors: Array.from(allColors),
        sizes: Array.from(allSizes).sort((a, b) => a - b)
    };
  }, [products]);


  return (
    <div className="catalog-page">
      
      <div className="filter-controls">
        <input
          type="text"
          placeholder="Пошук за назвою..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        
        <Select 
          label="Бренд"
          name="brand"
          value={filterBrand}
          onChange={(e) => setFilterBrand(e.target.value)}
          options={['', ...availableOptions.brands]}
          className="filter-select"
        />
        
        <Select 
          label="Колір"
          name="color"
          value={filterColor}
          onChange={(e) => setFilterColor(e.target.value)}
          options={['', ...availableOptions.colors]}
          className="filter-select"
        />

        <Select 
          label="Розмір"
          name="size"
          value={filterSize}
          onChange={(e) => setFilterSize(e.target.value)}
          options={['', ...availableOptions.sizes]}
          className="filter-select"
        />
      </div>
      
      {isLoading ? (
        <Loader />
      ) : error ? (
        <p style={{textAlign: 'center', color: 'red'}}>Error: {error}</p>
      ) : products.length > 0 ? (
        <ProductList sneakers={products} />
      ) : (
        <p style={{textAlign: 'center', marginTop: '40px', color: 'var(--primary-color)'}}>
          Products not found
        </p>
      )}
    </div>
  );
}

export default CatalogPage;