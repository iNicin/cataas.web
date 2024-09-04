// src/components/templates/HomeTemplate.tsx
import React from "react";
import Forms from "../organisms/Forms";
import CatCard from "../organisms/CatCard";
import { Container } from "@mui/material";

interface HomeTemplateProps {
    selectedTag: string;
    setSelectedTag: React.Dispatch<React.SetStateAction<string>>;
    text: string;
    setText: React.Dispatch<React.SetStateAction<string>>;
    catImage: string;
    onGenerateImage: () => void;
    onDownload: () => void;
    loading: boolean;
    error: string;
  }
  
  const HomeTemplate: React.FC<HomeTemplateProps> = ({
    selectedTag,
    setSelectedTag,
    text,
    setText,
    catImage,
    onGenerateImage,
    onDownload,
    loading,
    error,
  }) =>  {
  return (
    <Container maxWidth="sm">
      <Forms
        selectedTag={selectedTag}
        setSelectedTag={setSelectedTag}
        text={text}
        setText={setText}
        onGenerateImage={onGenerateImage}
      />
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {catImage && <CatCard catImage={catImage} selectedTag={selectedTag} onDownload={onDownload} />}
    </Container>
  );
};

export default HomeTemplate;