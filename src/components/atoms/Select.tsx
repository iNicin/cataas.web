import React from "react";
// Importa o React, necessário para criar componentes funcionais e utilizar JSX.

import { FormControl, InputLabel, MenuItem, Select as MUISelect, SelectProps } from "@mui/material";
// Importa componentes do Material-UI: 
// - FormControl: Um contêiner que gerencia o layout de formulários.
// - InputLabel: Um rótulo associado ao campo de entrada (input).
// - MenuItem: Representa uma opção dentro do seletor (dropdown).
// - Select: O componente de seleção propriamente dito, renomeado para MUISelect.
// - SelectProps: As propriedades que o Select do MUI aceita.

interface CustomSelectProps extends SelectProps {
  options: string[];
  label: string;
}
// Define uma interface CustomSelectProps que estende as propriedades do Select do MUI.
// Inclui:
// - "options": Um array de strings representando as opções disponíveis no seletor.
// - "label": O rótulo associado ao campo de seleção.

const Select: React.FC<CustomSelectProps> = ({ options, label, ...props }) => {
  // Define um componente funcional chamado "Select", que aceita propriedades conforme a interface CustomSelectProps.
  // A desestruturação obtém "options" (as opções do seletor), "label" (o rótulo), e "props" (as outras propriedades).

  return (
    <FormControl fullWidth>
      {/* FormControl envolve o campo de seleção, garantindo que ele seja exibido corretamente dentro de um formulário. */}
      <InputLabel>{label}</InputLabel>
      {/* InputLabel define o rótulo do campo de seleção, utilizando a propriedade "label". */}
      <MUISelect {...props}>
        {/* MUISelect é o componente de seleção, que recebe as propriedades passadas. */}
        {options.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
          // Cada opção do array "options" é mapeada para um MenuItem, que será exibido na lista do seletor.
          // "key" e "value" são definidos como a string da opção, e o texto exibido também é a própria string.
        ))}
      </MUISelect>
    </FormControl>
  );
};

export default Select;
// Exporta o componente customizado "Select" como padrão, para que possa ser usado em outros arquivos.