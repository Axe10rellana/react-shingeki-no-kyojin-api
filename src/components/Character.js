//importaciones
import React from "react";

//react-router
import { Link } from "react-router-dom";

//estilos css
import "../styles/Character.css";

const Character = ({ character }) => {
  //variables
  let id = character?.id;

  return (
    <>
      <li className="li">
        <Link to={`/characters/${id}`} className="li__link">
          <div className="li__img__container">
            <img
              className="li__img"
              src={character?.picture_url}
              alt={character?.name}
              title={character?.name}
            />
          </div>
          <div className="li__information">
            <h2 className="li__title">Nombre: {character?.name}</h2>
            <p className="li__text">Genero: {character?.gender}</p>
          </div>
        </Link>
      </li>
    </>
  );
};

export default Character;
