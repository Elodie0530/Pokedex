
function NavBar(props) {
return (<>
      {props.pokemonIndex > 0?<button onClick={props.pre}>Précédent</button>:<></>}
      {props.pokemonIndex < props.pokemonList.length - 1?<button onClick={props.next}>Suivant</button>:<></>}
    </>)}
  

export default NavBar;