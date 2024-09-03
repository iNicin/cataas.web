// src/components/atoms/Button.tsx
import React from "react";
import { Button as MUIButton, ButtonProps as MUIButtonProps } from "@mui/material";

interface ButtonProps extends MUIButtonProps {}

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <MUIButton {...props} style={{ backgroundColor: "#0093e5", color: "#fff", ...props.style }}>
      {children}
    </MUIButton>
  );
};

export default Button;