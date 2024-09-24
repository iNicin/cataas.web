// Importa React para criar componentes
import React from "react";
// Importa o componente Card da biblioteca Material UI para criar um cartão estilizado
import { Card } from "@mui/material";
// Importa o componente Image personalizado
import Image from "../atoms/Image";
// Importa o componente Button personalizado
import Button from "../atoms/Button";

// Define a interface para tipar as props que o componente CatCard vai receber
interface CatCardProps {
  catImage: string; // URL da imagem do gato
  selectedTag: string; // Tag selecionada, usada como alt para a imagem
  onDownload: () => void; // Função callback para ser chamada quando o botão de download for clicado
}

// Define o componente funcional CatCard, que recebe as props tipadas com CatCardProps
const CatCard: React.FC<CatCardProps> = ({ catImage, selectedTag, onDownload }) => {
  return (
    <div className="imageContainer">
      {/* Cria um cartão usando o componente Card do Material UI com estilização inline */}
      <Card
        sx={{
          margin: "3rem 0", // Define uma margem vertical ao redor do cartão
          border: "0.5rem solid #DADADA", // Define uma borda cinza clara ao redor do cartão
          borderRadius: 0, // Remove bordas arredondadas
          boxShadow: "0 0.25rem 0.25rem rgba(0,0,0,0.5)" // Aplica sombra para efeito de elevação
        }}
      >
        {/* Renderiza a imagem do gato usando o componente Image, com estilo para ocupar todo o espaço do cartão */}
        <Image
          src={catImage} // URL da imagem
          alt={`${selectedTag} cat image`} // Descrição alternativa para acessibilidade, usando a tag selecionada
          style={{ width: "100%", height: "100%", objectFit: "cover" }} // Ajusta a imagem para cobrir toda a área
        />
      </Card>
      
      {/* Renderiza o botão de download usando o componente Button personalizado */}
      <Button
        onClick={onDownload} // Passa a função onDownload para ser chamada ao clicar no botão
        variant="contained" // Estilo "contained" (botão preenchido) do Material UI
        style={{ width: "8rem", marginBottom: "2rem" }} // Define a largura do botão e margem inferior
      >
        Download {/* Texto do botão */}
      </Button>
    </div>
  );
};

// Exporta o componente CatCard para ser usado em outras partes da aplicação
export default CatCard;