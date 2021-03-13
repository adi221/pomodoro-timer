import React from 'react';

const Button = ({ title, activeClass, clicked }) => {
  return (
    <button className={activeClass} onClick={clicked}>
      {title}
    </button>
  );
};

export default Button;
