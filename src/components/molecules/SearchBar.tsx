import React from "react";
// Importa o React, necessário para criar componentes funcionais e utilizar JSX.

import FormField from "./FormField";
// Importa o componente FormField, que é um campo de formulário customizado para entrada de texto.

import IconButton from "../atoms/Icon";
// Importa o componente IconButton, que é um botão de ícone (provavelmente um ícone de busca) customizado.

interface SearchBarProps {
  text: string;
  onTextChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch: () => void;
}
// Define a interface SearchBarProps, que especifica as propriedades aceitas pelo componente SearchBar:
// - "text": O valor atual do campo de entrada.
// - "onTextChange": Uma função que será chamada quando o valor do campo de entrada mudar.
// - "onSearch": Uma função que será chamada quando o botão de busca for clicado.

const SearchBar: React.FC<SearchBarProps> = ({ text, onTextChange, onSearch }) => {
  // Define um componente funcional chamado "SearchBar", que aceita propriedades conforme a interface SearchBarProps.
  // A desestruturação obtém "text", "onTextChange", e "onSearch" das propriedades passadas.

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      {/* Um contêiner <div> com display "flex" para alinhar o campo de texto e o botão de busca na mesma linha. */}
      <FormField
        label="What’s the cat saying?"
        placeholder="Type something..."
        value={text}
        onChange={onTextChange}
      />
      {/* O componente FormField é usado para a entrada de texto. 
          Ele recebe "label", "placeholder", "value", e "onChange" para controlar seu conteúdo e comportamento. */}
      <IconButton onClick={onSearch} />
      {/* O componente IconButton é o botão de busca. 
          Quando clicado, ele chama a função "onSearch" passada como propriedade. */}
    </div>
  );
};

export default SearchBar;
// Exporta o componente customizado "SearchBar" como padrão, para que possa ser usado em outros arquivos.
