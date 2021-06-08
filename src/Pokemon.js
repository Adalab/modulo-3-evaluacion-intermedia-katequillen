import React from "react";

const Pokemon = (props) => {
  const types = props.pokemon.types.map((type, index) => {
    return (
      <li className="card_text" key={index}>
        {type}
      </li>
    );
  });
  return (
    <div className="card">
      <img src={props.pokemon.url} alt="" />
      <span className="poke_name">{props.pokemon.name}</span>
      <ul>{types}</ul>
    </div>
  );
};

export default Pokemon;