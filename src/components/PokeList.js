import React from "react";
import Pokemon from "./Pokemon.js";

const PokeList = (props) => {
  const eachPoke = props.PokemonData.map((pokemon) => (
    <li key={pokemon.id}>
      <Pokemon pokemon={pokemon} />
    </li>
  ));
  return (
    <>
      <h1 className="title">My Pokemon List</h1>
      <ul className="container">{eachPoke}</ul>
    </>
  );
};

export default PokeList;
