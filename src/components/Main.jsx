import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Main = () => {
  const [characters, setCharacters] = useState([]);
  const navigate = useNavigate();

  const handleGetCharacters = useCallback(async () => {
    try {
      const request = await fetch("https://thronesapi.com/api/v2/Characters");
      const data = await request.json();
      setCharacters(data);
    } catch (error) {
      console.error("Error fetching characters:", error);
    } finally {
      //
    }
  }, []);

  const handleCardClick = (id) => {
    navigate(`/character/${id}`);
  };

  useEffect(() => {
    handleGetCharacters();
  }, [handleGetCharacters]);

  return (
    <div className="characters">
      <h1 style={{ color: "white" }}>Popular characters</h1>
      <div className="characters-container">
        {characters.map((item) => (
          <div
            key={item.id}
            className="character-card"
            onClick={() => handleCardClick(item.id)}
          >
            <h1>{item.fullName}</h1>
            <img src={item.imageUrl} alt={item.fullName} />
            <p className="character-title">{item.title}</p>
            <p className="character-family">{item.family}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
