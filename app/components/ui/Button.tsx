import React from 'react';

interface ButtonProps {
  label: string;
  onClick?: () => void;
  variant?: 'fill' | 'outline' | 'text';
  disabled?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  variant = 'fill',
  disabled = false,
  className,
}) => {
  const baseStyle =
    'px-[24px] py-[10px] rounded-[20px] cursor-pointer font-medium transition-all duration-200 focus:outline-none';
  const variants = {
    fill: 'bg-primary text-onPrimary hover:bg-primaryContainer',
    outline: 'border-[1px] border-primary text-primary',
    text: ' text-primary hover:text-outline',
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyle} ${className} ${variants[variant]} ${
        disabled ? 'opacity-50 cursor-not-allowed' : ''
      }`}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
