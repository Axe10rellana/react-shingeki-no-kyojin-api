//importaciones
import React from "react";

//estilos css
import "../styles/Titans.css";

//componentes
import Titan from "./Titan";

const Titans = ({ titansData, search }) => {
  const filteredTitans = titansData.filter(
    (titan) =>
      titan?.name.toLowerCase().includes(search.toLowerCase()) ||
      titan?.height_m.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <ul className="list">
      {titansData &&
        filteredTitans?.map((titan) => <Titan key={titan?.id} titan={titan} />)}
    </ul>
  );
};

export default Titans;
