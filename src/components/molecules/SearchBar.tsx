// src/components/molecules/SearchBar.tsx
import React from "react";
import FormField from "./FormField";
import IconButton from "../atoms/Icon";

interface SearchBarProps {
  text: string;
  onTextChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ text, onTextChange, onSearch }) => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <FormField
        label="What’s the cat saying?"
        placeholder="Type something..."
        value={text}
        onChange={onTextChange}
      />
      <IconButton onClick={onSearch} />
    </div>
  );
};

export default SearchBar;
