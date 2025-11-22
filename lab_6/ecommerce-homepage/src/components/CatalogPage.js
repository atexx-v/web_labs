import React, { useState, useMemo } from 'react';
import ProductList from './ProductList';
import { sneakers } from '../data/products';

function CatalogPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterColor, setFilterColor] = useState('Color');
  const [filterBrand, setFilterBrand] = useState('Brand');
  const [filterSize, setFilterSize] = useState('Size');

  const allSizes = sneakers.flatMap(s => s.sizes || []);
  const uniqueSizes = new Set(allSizes);
  const availableSizes = ['Size', ...Array.from(uniqueSizes).sort((a, b) => a - b)];

  const uniqueBrands = new Set(sneakers.map(s => s.brand).filter(Boolean));
  const availableBrands = ['Brand', ...uniqueBrands];
  const uniqueColors = new Set(sneakers.map(s => s.color).filter(Boolean));
  const availableColors = ['Color', ...uniqueColors];


  const filteredProducts = useMemo(() => {
    const selectedSize = filterSize === 'Size' ? null : parseInt(filterSize);
    return sneakers.filter(sneaker => {
      
      const colorMatch = filterColor === 'Color' || sneaker.color === filterColor;
      const brandMatch = filterBrand === 'Brand' || sneaker.brand === filterBrand;
      const sizeMatch = selectedSize === null || 
                        (sneaker.sizes && sneaker.sizes.includes(selectedSize));

      const searchMatch = sneaker.name.toLowerCase().includes(searchTerm.toLowerCase());
      
      return colorMatch && brandMatch && sizeMatch && searchMatch; 
    });
  }, [searchTerm, filterColor, filterBrand, filterSize]);

  return (
    <div>      
      <div className="filter-controls">
        <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        
        <select value={filterColor} onChange={(e) => setFilterColor(e.target.value)}>
          {availableColors.map(color => (
            <option key={color} value={color}>{color}</option>
          ))}
        </select>

        <select value={filterBrand} onChange={(e) => setFilterBrand(e.target.value)}>
          {availableBrands.map(brand => (
            <option key={brand} value={brand}>{brand}</option>
          ))}
        </select>

        <select value={filterSize} onChange={(e) => setFilterSize(e.target.value)}>
          {availableSizes.map(size => (
            <option key={size} value={size}>{size}</option>
          ))}
        </select>
      </div>
      
      {filteredProducts.length > 0 ? (
        <ProductList products={filteredProducts} /> 
      ) : (
        <p>На жаль, за вашим запитом товари не знайдено.</p>
      )}
    </div>
  );
}
export default CatalogPage;