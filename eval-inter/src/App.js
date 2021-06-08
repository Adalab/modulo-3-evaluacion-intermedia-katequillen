import React from "react";
import PokeList from "./PokeList.js";
import PokemonData from "./Pokemondata.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { PokemonData };
  }

  render() {
    return (
      <div>
        <PokeList PokemonData={this.state.PokemonData} />
      </div>
    );
  }
}

export default App;
