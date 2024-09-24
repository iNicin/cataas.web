import React from "react"; 
// Importa o React, necessário para criar componentes funcionais e utilizar JSX.

import { Button as MUIButton, ButtonProps as MUIButtonProps } from "@mui/material";
// Importa o componente Button e as propriedades ButtonProps da biblioteca Material-UI (MUI).
// "Button" é renomeado para "MUIButton" para evitar conflitos com o nome do componente customizado.

interface ButtonProps extends MUIButtonProps {}
// Define a interface ButtonProps que estende as propriedades padrão do botão do Material-UI.
// Isso permite que o componente customizado aceite todas as propriedades que um botão padrão do MUI aceitaria.

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  // Define um componente funcional chamado "Button", que aceita propriedades conforme a interface ButtonProps.
  // A desestruturação obtém "children" (conteúdo do botão) e "props" (outras propriedades passadas).

  return (
    <MUIButton
      {...props}
      style={{ backgroundColor: "#0093e5", color: "#fff", ...props.style }}
    >
      {children}
    </MUIButton>
  );
  // Retorna o componente Button do MUI, aplicando as propriedades passadas (props) e 
  // adicionando estilo customizado: cor de fundo e cor do texto.
  // Se existir algum estilo adicional em "props.style", ele será mesclado ao estilo customizado.
  // O conteúdo do botão é definido pelo "children".
};

export default Button;
// Exporta o componente customizado "Button" como padrão, para que possa ser usado em outros arquivos.
