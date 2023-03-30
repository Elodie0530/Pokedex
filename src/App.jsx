import PokemonCard from "./components/PokemonCard"
import { useState } from "react"
import NavBar from "./components/NavBar";

function App() {
  const [pokemonIndex, setpokemonIndex] = useState(0);

  function next() {
    setpokemonIndex(pokemonIndex+1)
  }
  function pre() {
    setpokemonIndex(pokemonIndex-1)
  }
  return (
    <div>
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
      <p>Valeur du tableau: {pokemonIndex}</p>
      <p>{pokemonIndex+1}/{pokemonList.length}</p>
      <NavBar next={next} pre={pre} pokemonIndex={pokemonIndex} pokemonList={pokemonList} />
     </div>
  )

}



const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
  },
];


export default App
