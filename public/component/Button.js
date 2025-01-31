import React from 'react';

const Button = ({ label, onClick, type = 'button', disabled = false, className = '' }) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${className}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
