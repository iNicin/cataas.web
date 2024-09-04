import React from "react";
// Importa o React, necessário para criar componentes funcionais e utilizar JSX.

import { TextField, TextFieldProps } from "@mui/material";
// Importa o componente TextField e suas propriedades (TextFieldProps) da biblioteca Material-UI (MUI).
// TextField é um componente de entrada de texto (input) com estilo e funcionalidades adicionais.

const Input: React.FC<TextFieldProps> = (props) => {
  // Define um componente funcional chamado "Input", que aceita todas as propriedades de um TextField padrão.
  // "props" representa as propriedades passadas para o componente, que são do tipo TextFieldProps.

  return <TextField {...props} />;
  // Retorna o componente TextField do MUI, passando todas as propriedades recebidas diretamente para ele.
  // Isso permite que o componente "Input" seja usado exatamente como um TextField padrão, com qualquer configuração desejada.
};

export default Input;
// Exporta o componente customizado "Input" como padrão, para que possa ser usado em outros arquivos.
