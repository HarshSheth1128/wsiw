import React from 'react';
import './Button.scss';

const Button = ({ style, children, variant }) => (
  <button className={variant} type="button" style={style}>
    {children}
  </button>
);

export default Button;
