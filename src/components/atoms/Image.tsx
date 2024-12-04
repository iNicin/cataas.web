import React from "react";
// Importa o React, necessário para criar componentes funcionais e utilizar JSX.

interface ImageProps {
  src: string;
  alt: string;
  style?: React.CSSProperties;
}
// Define a interface ImageProps, que especifica as propriedades que o componente Image aceitará:
// - "src": uma string que representa o caminho ou URL da imagem.
// - "alt": uma string que descreve o conteúdo da imagem para acessibilidade.
// - "style" (opcional): um objeto de estilos CSS que pode ser aplicado à imagem.

const Image: React.FC<ImageProps> = ({ src, alt, style }) => {
  // Define um componente funcional chamado "Image", que aceita propriedades conforme a interface ImageProps.
  // A desestruturação obtém "src", "alt" e "style" das propriedades passadas.

  return <img src={src} alt={alt} style={style} />;
  // Retorna um elemento <img> do HTML, utilizando os valores das propriedades passadas:
  // - "src" define o caminho ou URL da imagem.
  // - "alt" fornece uma descrição do conteúdo da imagem.
  // - "style", se fornecido, é aplicado diretamente ao estilo da imagem.
};

export default Image;
// Exporta o componente customizado "Image" como padrão, para que possa ser usado em outros arquivos.