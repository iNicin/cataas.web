// src/components/atoms/Image.tsx
import React from "react";

interface ImageProps {
  src: string;
  alt: string;
  style?: React.CSSProperties;
}

const Image: React.FC<ImageProps> = ({ src, alt, style }) => {
  return <img src={src} alt={alt} style={style} />;
};

export default Image;