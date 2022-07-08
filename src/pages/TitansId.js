//importaciones
import React, { useState, useEffect } from "react";

//react-router
import { useParams, Link } from "react-router-dom";

//componentes
import Loader from "../components/Loader";

//estilos css
import "../styles/TitansId.css";

const TitansId = () => {
  //variables de estado
  const [titans, setTitans] = useState({});
  const [loading, setLoading] = useState(true);

  //react-router
  const params = useParams();

  //useEffect
  useEffect(() => {
    const getCharacter = async () => {
      const response = await fetch(
        `https://attackontitanapi.herokuapp.com/api/titans/${params.id}`
      );
      const data = await response.json();
      setLoading(false);
      setTitans(data);
    };

    getCharacter();
  }, [params.id]);

  //console.info(titans);

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
                src={titans?.picture_url}
                alt={titans?.name}
                title={titans?.name}
              />
            </div>
            <div className="card__information">
              <h1 className="card__title">Nombre: {titans?.name}</h1>
              <h2 className="card__subtitle">Información</h2>
              <p className="card__text">Altura: {titans?.height_m}</p>
              <p className="card__text">Descripción: {titans?.description}</p>
              <p className="card__text">Genero: {titans?.shifter?.gender}</p>
              <Link
                to={`/characters/${titans?.character_id}`}
                className="card__link"
              >
                Nombre del portador: {titans?.shifter?.name}
              </Link>
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

export default TitansId;
