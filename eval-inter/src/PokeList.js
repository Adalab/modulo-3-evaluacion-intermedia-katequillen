import React from "react";
import Pokemon from "./Pokemon.js";

const PokeList = (props) => {
  const items = props.PokemonData.map((pokemon) => (
    <li key={pokemon.id}>
      <Pokemon pokemon={pokemon} />
    </li>
  ));
  return (
    <>
      <h1 className="title">My Pokemon List</h1>
      <ul className="card">{items}</ul>
    </>
  );
};

export default PokeList;
