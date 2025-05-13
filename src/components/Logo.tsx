
import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
  size?: 'small' | 'medium' | 'large';
  linkTo?: string;
}

const Logo: React.FC<LogoProps> = ({ className = '', size = 'medium', linkTo = '/' }) => {
  const sizeClasses = {
    small: 'text-xl',
    medium: 'text-2xl',
    large: 'text-4xl'
  };

  const content = (
    <div className={`font-bold ${sizeClasses[size]} ${className}`}>
      <span className="text-primary">Code</span>
      <span className="text-primary-accent">Pilot</span>
    </div>
  );

  if (linkTo) {
    return <Link to={linkTo}>{content}</Link>;
  }

  return content;
};

export default Logo;
