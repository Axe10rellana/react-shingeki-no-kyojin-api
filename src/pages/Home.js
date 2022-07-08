//importaciones
import React, { useEffect, useState } from "react";

//componentes
import Loader from "../components/Loader";
import Characters from "../components/Characters";
import Titans from "../components/Titans";

//estilos css
import "../styles/Home.css";

const Home = () => {
  //variables de estado
  const [characters, setCharacters] = useState([]);
  const [titans, setTitans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  //useEffect
  useEffect(() => {
    const getCharacters = async () => {
      const response = await fetch(
        "https://attackontitanapi.herokuapp.com/api/characters"
      );
      const data = await response.json();
      setLoading(false);
      setCharacters(data);
    };

    getCharacters();
  }, []);

  useEffect(() => {
    const getTitans = async () => {
      const response = await fetch(
        "https://attackontitanapi.herokuapp.com/api/titans"
      );
      const data = await response.json();
      setLoading(false);
      setTitans(data);
    };

    getTitans();
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <input
            type="search"
            placeholder="Buscar un personaje"
            className="home__input"
            onChange={(e) => setSearch(e.target.value)}
            autoFocus
            autoComplete="off"
            required
          />
          <h2 className="home__title">Personajes</h2>
          <Characters charactersData={characters} search={search} />
          <hr className="home__hr" />
          <h2 className="home__title">Titanes</h2>
          <Titans titansData={titans} search={search} />
        </>
      )}
    </>
  );
};

export default Home;
