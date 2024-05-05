import React from 'react';

interface AvatarProps {
  src: string;
  alt: string;
  size?: 'small' | 'medium' | 'large';
}

const Avatar: React.FC<AvatarProps> = ({ src, alt, size = 'medium' }) => {
  let sizeClassName = '';

  switch (size) {
    case 'small':
      sizeClassName = 'w-8 h-8';
      break;
    case 'large':
      sizeClassName = 'w-12 h-12';
      break;
    default:
      sizeClassName = 'w-10 h-10';
      break;
  }

  return <img src={src} alt={alt} className={`rounded-full ${sizeClassName}`} />;
};

export default Avatar;
