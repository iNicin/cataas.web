// src/components/organisms/Forms.tsx
import React from "react";
import { Grid } from "@mui/material";
import TagSelector from "../molecules/TagSelector";
import SearchBar from "../molecules/SearchBar";

interface FormsProps {
  selectedTag: string;
  setSelectedTag: React.Dispatch<React.SetStateAction<string>>;
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  onGenerateImage: () => void;
}

const Forms: React.FC<FormsProps> = ({ selectedTag, setSelectedTag, text, setText, onGenerateImage }) => {
  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item xs={5}>
        <TagSelector selectedTag={selectedTag} onTagChange={(e) => setSelectedTag(e.target.value as string)} />
      </Grid>
      <Grid item xs={5}>
        <SearchBar text={text} onTextChange={(e) => setText(e.target.value)} onSearch={onGenerateImage} />
      </Grid>
    </Grid>
  );
};

export default Forms;
