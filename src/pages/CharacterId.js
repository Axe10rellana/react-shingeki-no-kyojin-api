//importaciones
import React, { useState, useEffect } from "react";

//react-router
import { useParams, Link } from "react-router-dom";

//componentes
import Loader from "../components/Loader";

//estilos css
import "../styles/CharacterId.css";

const CharacterId = () => {
  //variables de estado
  const [character, setCharacter] = useState({});
  const [loading, setLoading] = useState(true);

  //react-router
  const params = useParams();

  //useEffect
  useEffect(() => {
    const getCharacter = async () => {
      const response = await fetch(
        `https://attackontitanapi.herokuapp.com/api/characters/${params.id}`
      );
      const data = await response.json();
      setLoading(false);
      setCharacter(data);
    };

    getCharacter();
  }, [params.id]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <article className="card">
            <div className="card__img__container">
              <img
                className="card__img"
                src={character?.picture_url}
                alt={character?.name}
                title={character?.name}
              />
            </div>
            <div className="card__information">
              <h1 className="card__title">Nombre: {character?.name}</h1>
              <h2 className="card__subtitle">Información</h2>
              <p className="card__text">Genero: {character?.gender}</p>
            </div>
          </article>
          <Link to="/" className="card__button">
            Volver
          </Link>
        </>
      )}
    </>
  );
};

export default CharacterId;
