import React, {useContext, useEffect} from "react";
import {
    Container,
    Row
} from "reactstrap";

import PokemonCard from "../components/PokemonCard";
import {Context} from "../Context";
import LoadMoreBtn from "../components/LoadMoreBtn";

function CaughtPokemons() {
    const {allPokemons, downloadData} = useContext(Context)
    const filter = "isCaught=true&";
    downloadData(24, filter);
    const caughtPokemons = allPokemons.map(pokemon => (
        <PokemonCard key={pokemon.id} pokemon={pokemon}/>
    ));
    // const caughtPokemons = allPokemons
    //     .filter(pokemon => pokemon.isCaught === true)
    //     .map(pokemon => (
    //         <PokemonCard key={pokemon.id} pokemon={pokemon}/>
    //     ));
    return (
        <>
            <Container className="mb-2 mb-lg-5">
                <Row>
                    {caughtPokemons}
                </Row>
            </Container>
            <LoadMoreBtn/>
        </>
    );
}

export default CaughtPokemons;