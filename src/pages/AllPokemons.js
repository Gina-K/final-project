import React, {useContext} from "react";

import PokemonCard from "../components/PokemonCard";
import {Context} from "../Context";

function AllPokemons() {
    const {allPokemons} = useContext(Context);
    const pokemons = allPokemons.map(pokemon => (
        <PokemonCard key={pokemon.id} pokemon={pokemon}/>
    ));

    return (
        <>
            {pokemons}
        </>
    );
}

export default AllPokemons;