//importaciones
import React from "react";

//estilos css
import "../styles/Characters.css";

//componentes
import Character from "./Character";

const Characters = ({ charactersData, search }) => {
  const filteredCharacters = charactersData.filter(
    (character) =>
      character?.name.toLowerCase().includes(search.toLowerCase()) ||
      character?.gender.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <ul className="list">
      {charactersData &&
        filteredCharacters?.map((character) => (
          <Character key={character?.id} character={character} />
        ))}
    </ul>
  );
};

export default Characters;
