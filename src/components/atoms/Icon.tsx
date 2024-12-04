import React from "react"; 
// Importa o React, necessário para criar componentes funcionais e utilizar JSX.

import { IconButton as MUIIconButton } from "@mui/material";
// Importa o componente IconButton da biblioteca Material-UI (MUI).
// "IconButton" é renomeado para "MUIIconButton" para evitar conflitos com o nome do componente customizado.

import SearchIcon from "@mui/icons-material/Search";
// Importa o ícone de pesquisa (SearchIcon) da biblioteca de ícones do Material-UI.

interface IconButtonProps {
  onClick: () => void;
}
// Define a interface IconButtonProps, que especifica que o componente aceitará uma propriedade "onClick".
// "onClick" é uma função que será chamada quando o botão for clicado.

const IconButton: React.FC<IconButtonProps> = ({ onClick }) => {
  // Define um componente funcional chamado "IconButton", que aceita propriedades conforme a interface IconButtonProps.
  // A desestruturação obtém a função "onClick" passada como propriedade.

  return (
    <MUIIconButton 
      onClick={onClick} 
      style={{ backgroundColor: "#0093e5", color: "#fff" }}
    >
      <SearchIcon />
    </MUIIconButton>
  );
  // Retorna o componente IconButton do MUI, aplicando as propriedades passadas (onClick) e 
  // adicionando estilo customizado: cor de fundo (#0093e5) e cor do ícone (#fff).
  // Dentro do botão, é renderizado o ícone de pesquisa (SearchIcon).
};

export default IconButton;
// Exporta o componente customizado "IconButton" como padrão, para que possa ser usado em outros arquivos.