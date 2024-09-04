// src/components/organisms/CatCard.tsx
import React from "react";
import { Card } from "@mui/material";
import Image from "../atoms/Image";
import Button from "../atoms/Button";

interface CatCardProps {
  catImage: string;
  selectedTag: string;
  onDownload: () => void;
}

const CatCard: React.FC<CatCardProps> = ({ catImage, selectedTag, onDownload }) => {
  return (
    <div className="imageContainer">
      <Card sx={{ margin: "3rem 0", border: "0.5rem solid #DADADA", borderRadius: 0, boxShadow: "0 0.25rem 0.25rem rgba(0,0,0,0.5)" }}>
        <Image src={catImage} alt={`${selectedTag} cat image`} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </Card>
      <Button onClick={onDownload} variant="contained" style={{ width: "8rem", marginBottom: "2rem" }}>Download</Button>
    </div>
  );
};

export default CatCard;
