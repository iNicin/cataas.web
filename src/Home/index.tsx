import React, { useState, useEffect } from "react";
import axios from "axios";
import { TailSpin } from "react-loader-spinner";
import { Forms } from "../components/Forms";
import { Container, Button, Card } from "@mui/material";
import './styles/index.css';

interface HomeProps {}

export const Home: React.FC<HomeProps> = () => {
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
      setError("");

      if (!selectedTag) {
        setError("Choose the type of kitten you want first");
        return;
      }

      const apiUrl = "https://cataas.com/";
      const tagParam = `cat/${selectedTag}`;
      const textParam = `/says/${encodeURIComponent(text)}`;
      const url = text
        ? `${apiUrl}${tagParam}${textParam}`
        : `${apiUrl}${tagParam}`;

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
    <Container maxWidth="sm">
      <Forms
        selectedTag={selectedTag}
        setSelectedTag={setSelectedTag}
        setText={setText}
        onGenerateImage={() => setLoading(true)}
      />
      {loading && (
        <div className="loading">
          <TailSpin color="#0093e5" height={60} width={60} />
        </div>
      )}
      {error && <p className="error-message">{error}</p>}
      {!loading && catImage && (
        <div className="imageContainer">
          <Card
            sx={{
              margin: "3rem 0",
              border: "0.5rem solid #DADADA",
              borderRadius: 0,
              boxShadow: "0 0.25rem 0.25rem rgba(0,0,0,0.5)",
            }}
          >
            <img
              src={catImage}
              alt={`${selectedTag} cat image`}
              style={{ height: "31.25rem", objectFit: "cover" }}
            />
          </Card>
          <Button
            onClick={handleDownload}
            variant="contained"
            className="download-button"
            style={{
              width: "8rem",
              backgroundColor: "#0093e5",
              color: "#fff",
              marginBottom: "2rem",
            }}
            fullWidth
          >
            Download
          </Button>
        </div>
      )}
    </Container>
  );
};
