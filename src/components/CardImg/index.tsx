import React from "react";

interface CardImgProps {
  catImage: React.ReactNode;
}

const CardImg: React.FC<CardImgProps> = ({ catImage }) => {
  return <div>{catImage}</div>;
};

export default CardImg;