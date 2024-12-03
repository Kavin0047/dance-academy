import { useState } from 'react';
import { validateImage } from '../../utils/imageLoader';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallback?: string;
  className?: string;
}

const Image = ({ src, alt, fallback, className = '', ...props }: ImageProps) => {
  const [error, setError] = useState(false);
  const validatedSrc = validateImage(src, fallback);

  return (
    <img
      src={error ? (fallback || '/images/placeholder.jpg') : validatedSrc}
      alt={alt}
      className={`${className} ${error ? 'opacity-50' : ''}`}
      onError={() => setError(true)}
      {...props}
    />
  );
};

export default Image;