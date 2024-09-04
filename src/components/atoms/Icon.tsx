// src/components/atoms/IconButton.tsx
import React from "react";
import { IconButton as MUIIconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

interface IconButtonProps {
  onClick: () => void;
}

const IconButton: React.FC<IconButtonProps> = ({ onClick }) => {
  return (
    <MUIIconButton onClick={onClick} style={{ backgroundColor: "#0093e5", color: "#fff" }}>
      <SearchIcon />
    </MUIIconButton>
  );
};

export default IconButton;
