import React from "react";
import PropTypes from "prop-types";

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
      <img src={props.pokemon.url} alt={props.pokemon.name} />
      <span className="poke_name">{props.pokemon.name}</span>
      <ul>{types}</ul>
    </div>
  );
};

Pokemon.propTypes = {
  url: PropTypes.string,
  name: PropTypes.string,
};

export default Pokemon;
