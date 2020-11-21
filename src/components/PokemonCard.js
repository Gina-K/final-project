import React from "react";

function PokemonCard({pokemon}) {
    return (
        <div>
            <h3>{pokemon.name}</h3>
            <p>{pokemon.id}</p>
            <img width="100" src={process.env.PUBLIC_URL + `pokemons/${pokemon.id}.png`} alt={pokemon.name}/>
            <input type="button" value="Catch!"/>
            <hr/>
        </div>
    )
}

export default PokemonCard;