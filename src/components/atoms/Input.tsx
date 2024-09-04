// src/components/atoms/Input.tsx
import React from "react";
import { TextField, TextFieldProps } from "@mui/material";

const Input: React.FC<TextFieldProps> = (props) => {
  return <TextField {...props} />;
};

export default Input;