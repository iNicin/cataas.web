// src/components/atoms/Select.tsx
import React from "react";
import { FormControl, InputLabel, MenuItem, Select as MUISelect, SelectProps } from "@mui/material";

interface CustomSelectProps extends SelectProps {
  options: string[];
  label: string;
}

const Select: React.FC<CustomSelectProps> = ({ options, label, ...props }) => {
  return (
    <FormControl fullWidth>
      <InputLabel>{label}</InputLabel>
      <MUISelect {...props}>
        {options.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </MUISelect>
    </FormControl>
  );
};

export default Select;