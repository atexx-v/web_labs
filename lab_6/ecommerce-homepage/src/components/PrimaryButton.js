import React from 'react';

function PrimaryButton({ children, onClick, disabled, className, type = 'button' }) {
  
  const buttonClasses = `btn ${className || ''}`;

  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default PrimaryButton;