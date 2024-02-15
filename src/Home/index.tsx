import React, { useState, useEffect } from "react";
import axios from "axios";
import { TailSpin } from "react-loader-spinner";
import { Forms } from "../components/Forms";
import CardImg from "../components/CardImg/index";

export const Home: React.FC = () => {
  const [catImage, setCatImage] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [selectedTag, setSelectedTag] = useState<string>("");
  const [text, setText] = useState<string>("");

  useEffect(() => {
    if (loading) {
      generateCatImage();
    }
  }, [loading, selectedTag, text]);

  const generateCatImage = async () => {

    try {
      setLoading(true);
      const apiUrl = "https://cataas.com/";
      const tagParam = `cat/${selectedTag}`;
      const textParam = `/says/${encodeURIComponent(text)}`;
      const url = text
        ? `${apiUrl}${tagParam}${textParam}`
        : `${apiUrl}${tagParam}`;

      console.log({ url });

      const response = await axios.get<Blob>(url, { responseType: "blob" });

      if (response.data) {
        setCatImage(URL.createObjectURL(response.data));
        setError("");
      } else {
        setError("Resposta da API sem dados de imagem.");
      }
    } catch {
      console.error("Erro ao gerar a imagem do gato:");
      setError(`Erro ao tentar gerar a imagem do gato. Detalhes do erro:`);
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = () => {
    if (catImage) {
      const link = document.createElement("a");
      link.href = catImage;
      link.download = `${selectedTag}-cat`;
      link.click();
    }
  };

  return (
    <div>
      <Forms
        setSelectedTag={setSelectedTag}
        setText={setText}
      />
      <button onClick={() => generateCatImage()}>Gerar Imagem</button>
      {loading && <TailSpin color="#00BFFF" height={50} width={50} />}
      {error && <p className="error-message">{error}</p>}
      {catImage && <CardImg catImage={<img src={catImage} alt={`${selectedTag} cat image`} className="cat-image" />} />}
      {catImage && (
        <button onClick={handleDownload} className="download-button">
          Download
        </button>
      )}
    </div>
  );
};
