// src/components/molecules/FormField.tsx
import React from "react";
import Input from "../atoms/Input";

interface FormFieldProps {
  label: string;
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormField: React.FC<FormFieldProps> = ({ label, placeholder, value, onChange }) => {
  return (
    <Input
      label={label}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      multiline
      fullWidth
    />
  );
};

export default FormField;