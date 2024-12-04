// src/pages/Home.tsx
import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import HomeTemplate from './../templates/HomeTemplate';

const Home: React.FC = () => {
  const [catImage, setCatImage] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [selectedTag, setSelectedTag] = useState<string>("");
  const [text, setText] = useState<string>("");

  const generateCatImage = useCallback(async () => {
    try {
      setLoading(true);
      setError("");

      if (!selectedTag) {
        setError("Choose the type of kitten you want first");
        setLoading(false);
        return;
      }

      const apiUrl = "https://cataas.com/";
      const tagParam = `cat/${selectedTag}`;
      const textParam = `/says/${encodeURIComponent(text)}`;
      const url = text ? `${apiUrl}${tagParam}${textParam}` : `${apiUrl}${tagParam}`;

      const response = await axios.get<Blob>(url, { responseType: "blob" });

      if (response.data) {
        setCatImage(URL.createObjectURL(response.data));
        setError("");
      } else {
        setError("Kitten not found :(");
      }
    } catch {
      console.error("Image not generated");
      setError(`Image not generated - the kitten is shy ><`);
    } finally {
      setLoading(false);
    }
  }, [selectedTag, text]); // Adiciona `selectedTag` e `text` como dependências

  useEffect(() => {
    if (loading) {
      generateCatImage();
    }
  }, [loading, generateCatImage]); // Adiciona `generateCatImage` como dependência

  const handleDownload = () => {
    if (catImage) {
      const link = document.createElement("a");
      link.href = catImage;
      link.download = `${selectedTag}-cat`;
      link.click();
    }
  };

  return (
    <HomeTemplate
      selectedTag={selectedTag}
      setSelectedTag={setSelectedTag}
      text={text}
      setText={setText}
      catImage={catImage}
      onGenerateImage={() => setLoading(true)}
      onDownload={handleDownload}
      loading={loading}
      error={error}
    />
  );
};

export default Home;