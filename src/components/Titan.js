//importaciones
import React from "react";

//react-router
import { Link } from "react-router-dom";

//estilos css
import "../styles/Titan.css";

const Titan = ({ titan }) => {
  //variables
  let id = titan?.id;

  return (
    <>
      <li className="li">
        <Link to={`/titans/${id}`} className="li__link">
          <div className="li__img__container">
            <img
              className="li__img"
              src={titan?.picture_url}
              alt={titan?.name}
              title={titan?.name}
            />
          </div>
          <div className="li__information">
            <h2 className="li__title">Nombre: {titan?.name}</h2>
            <p className="li__text">Genero: {titan?.height_m}</p>
          </div>
        </Link>
      </li>
    </>
  );
};

export default Titan;
