import React, { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import { colorClasses, sizeClasses } from './lib/attributes';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: 'gray' | 'blue' | 'red' | 'green';
  size?: 'small' | 'medium' | 'large';
}

const Button: React.FC<PropsWithChildren<ButtonProps>> = ({
  children,
  onClick,
  className = '',
  color = 'gray',
  size = 'medium',
  ...rest
}) => {
  const colorClass = colorClasses[color];
  const sizeClass = sizeClasses[size];

  return (
    <button
      onClick={onClick}
      className={`font-bold rounded focus:outline-none focus:shadow-outline transition duration-300 ${colorClass} ${sizeClass} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
