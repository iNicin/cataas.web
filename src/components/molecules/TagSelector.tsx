import React from "react";
// Importa o React para criar componentes funcionais e utilizar JSX.

import Select from "../atoms/Select";
// Importa o componente Select customizado (provavelmente já implementado).

import { SelectChangeEvent } from "@mui/material"; 
// Importa o tipo SelectChangeEvent da biblioteca Material-UI. 
// Esse tipo é usado para definir o evento de mudança em um componente Select.

interface TagSelectorProps {
  selectedTag: string;
  onTagChange: (event: SelectChangeEvent<unknown>, child: React.ReactNode) => void;
  // Define a interface TagSelectorProps com as seguintes propriedades:
  // - "selectedTag": O valor atual da tag selecionada, do tipo string.
  // - "onTagChange": Função chamada ao mudar a tag. Ela recebe um evento e o filho (child) associado.
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
// Define um array de strings chamado TagsList, que contém as opções de tags para o seletor.

const TagSelector: React.FC<TagSelectorProps> = ({ selectedTag, onTagChange }) => {
  // Define um componente funcional chamado "TagSelector", que aceita propriedades conforme a interface TagSelectorProps.
  // A desestruturação obtém "selectedTag" e "onTagChange" das propriedades passadas.

  const handleTagChange = (event: SelectChangeEvent<unknown>, child: React.ReactNode) => {
    // Função para tratar a mudança de tag. Ela recebe o evento e o elemento filho selecionado.
    onTagChange(event as SelectChangeEvent<unknown>, child);
    // A função "onTagChange" é chamada passando o evento e o filho (com o tipo correto).
  };

  return (
    <Select
      label="Select a type of cat"
      // Define o rótulo para o campo de seleção.

      value={selectedTag}
      // Define o valor atual do seletor usando a propriedade "selectedTag".

      onChange={handleTagChange}
      // A função "handleTagChange" é chamada sempre que o usuário selecionar uma nova tag.

      options={TagsList}
      // Passa a lista de opções de tags (TagsList) para o seletor.
    />
  );
};

export default TagSelector;
// Exporta o componente "TagSelector" como padrão, para que possa ser usado em outros arquivos.