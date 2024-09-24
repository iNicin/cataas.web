import React from "react";
// Importa o React, necessário para criar componentes funcionais e utilizar JSX.

import Input from "../atoms/Input";
// Importa o componente de Input criado anteriormente, que provavelmente é baseado no TextField do Material-UI.

interface FormFieldProps {
  label: string;
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
// Define a interface FormFieldProps, que especifica as propriedades que o componente FormField aceitará:
// - "label": O rótulo descritivo do campo de formulário.
// - "placeholder": Texto que aparece no campo quando ele está vazio, orientando o usuário sobre o que inserir.
// - "value": O valor atual do campo de entrada.
// - "onChange": Uma função que será chamada quando o valor do campo for alterado.

const FormField: React.FC<FormFieldProps> = ({ label, placeholder, value, onChange }) => {
  // Define um componente funcional chamado "FormField", que aceita as propriedades conforme a interface FormFieldProps.
  // A desestruturação obtém "label", "placeholder", "value" e "onChange" das propriedades passadas.

  return (
    <Input
      label={label}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      multiline
      fullWidth
    />
    // Retorna o componente Input, passando as propriedades do FormField diretamente para ele.
    // "multiline" habilita o campo de texto para aceitar múltiplas linhas de entrada.
    // "fullWidth" faz com que o campo de entrada ocupe toda a largura disponível.
    // "label", "placeholder", "value" e "onChange" são repassados ao Input para controlar sua aparência e comportamento.
  );
};

export default FormField;
// Exporta o componente customizado "FormField" como padrão, para que possa ser usado em outros arquivos.