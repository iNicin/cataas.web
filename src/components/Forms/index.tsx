interface FormsProps {
  setSelectedTag: React.Dispatch<React.SetStateAction<string>>;
  setText: React.Dispatch<React.SetStateAction<string>>;
}

const TagsList: string[] = [
  "angry",
  "chubby",
  "curious",
  "cute",
  "funny",
  "happy",
  "playful",
  "sad",
  "sleepy",
  "surprised",
];

export const Forms: React.FC<FormsProps> = ({ setSelectedTag, setText }) => {
  const handleTagChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTag(e.target.value);
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <div>
      <label htmlFor="tagSelect">Select a type of cat</label>
      <select
        id="tagSelect"
        onChange={handleTagChange}
        aria-label="Select a type of cat"
      >
        <option value=""></option>
        {TagsList.map((tag) => (
          <option key={tag} value={tag}>
            {tag}
          </option>
        ))}
      </select>
      <label htmlFor="textInput">What’s the cat saying?</label>
      <input
        type="text"
        id="textInput"
        onChange={handleTextChange}
        placeholder="ex: Meoooow~"
      />
    </div>
  );
};
