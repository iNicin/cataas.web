import React from "react";
import './styles/index.css';

import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  SelectChangeEvent,
  Container,
  Grid,
  IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";


interface FormsProps {
  selectedTag: string;
  setSelectedTag: React.Dispatch<React.SetStateAction<string>>;
  setText: React.Dispatch<React.SetStateAction<string>>;
  onGenerateImage: () => void;
}

const TagsList: string[] = [
  "angry",
  "cute",
  "funny",
  "happy",
  "sad",
  "sleepy",
  "surprised",
];

export const Forms: React.FC<FormsProps> = ({
  selectedTag,
  setSelectedTag,
  setText,
  onGenerateImage,
}) => {
  const handleTagChange = (e: SelectChangeEvent<string>) => {
    setSelectedTag(e.target.value);
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <Container
      sx={{
        maxWidth: "100%",
        position: "relative",
      }}
      maxWidth="sm"
    >
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={5}>
          <FormControl fullWidth>
            <InputLabel htmlFor="tagSelect">Select a type of cat</InputLabel>
            <Select
              label="Select a type of cat"
              id="tagSelect"
              onChange={handleTagChange}
              value={selectedTag || ""}
            >
              {TagsList.map((tag) => (
                <MenuItem key={tag} value={tag}>
                  {tag}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={5}>
          <FormControl fullWidth>
            <TextField
              type="text"
              label="What’s the cat saying?"
              id="textInput"
              onChange={handleTextChange}
              multiline
            />
          </FormControl>
        </Grid>
        <Grid item xs={1}>
          <IconButton
            onClick={onGenerateImage}
            style={{
              backgroundColor: "#0093e5",
              borderRadius: "50%",
              width: "2.5rem",
              height: "2.5rem",
            }}
          >
            <SearchIcon style={{ color: "#fff" }} />
          </IconButton>
        </Grid>
      </Grid>
    </Container>
  );
};
