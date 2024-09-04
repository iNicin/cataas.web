// src/components/molecules/TagSelector.tsx
import React from "react";
import Select from "../atoms/Select";
import { SelectChangeEvent } from "@mui/material"; // Importando o tipo SelectChangeEvent

interface TagSelectorProps {
  selectedTag: string;
  onTagChange: (event: SelectChangeEvent<unknown>, child: React.ReactNode) => void; // Usando unknown para flexibilidade
}

const TagsList: string[] = [
  "angry",
  "black",
  "cute",
  "funny",
  "gray",
  "happy",
  "orange",
  "sad",
  "sleepy",
  "surprised",
];

const TagSelector: React.FC<TagSelectorProps> = ({ selectedTag, onTagChange }) => {
  // Função de manuseio de tag convertendo para string
  const handleTagChange = (event: SelectChangeEvent<unknown>, child: React.ReactNode) => {
    onTagChange(event as SelectChangeEvent<unknown>, child); // Passando o evento corretamente
  };

  return (
    <Select
      label="Select a type of cat"
      value={selectedTag}
      onChange={handleTagChange} // Usando a função de manuseio corrigida
      options={TagsList}
    />
  );
};

export default TagSelector;