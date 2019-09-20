import React from 'react';
import './Button.scss';

const Button = ({ style, onClick, children, variant }) => (
  <button onClick={onClick} className={variant} type="button" style={style}>
    {children}
  </button>
);

export default Button;
