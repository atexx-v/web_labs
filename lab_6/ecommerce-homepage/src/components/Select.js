import React from 'react';

function Select({ label, name, options, value, onChange, className }) {
  
  const formattedOptions = (options || []).map(option => {
    if (typeof option === 'object' && option !== null && 'value' in option) {
      return option;
    }
    return { value: option, label: String(option) };
  });

  return (
    <div className={`select-container ${className || ''}`}>
      {label && <label htmlFor={name} className="select-label">{label}</label>}
      <select 
        id={name} 
        name={name}
        value={value}
        onChange={onChange}
        className="custom-select"
      >
        <option value="" disabled>All</option>
        
        {formattedOptions.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;