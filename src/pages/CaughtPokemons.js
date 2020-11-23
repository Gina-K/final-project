import React, {useContext, useEffect} from "react";
import {
    Container,
    Row
} from "reactstrap";

import PokemonCard from "../components/PokemonCard";
import {Context} from "../Context";
import LoadMoreBtn from "../components/LoadMoreBtn";

function CaughtPokemons() {
    const {downloadCaught, caughtPokemons, loadMoreCaught} = useContext(Context);

    useEffect(downloadCaught, []);

    const pokemons = caughtPokemons.map(pokemon => (
        <PokemonCard key={pokemon.id} pokemon={pokemon}/>
    ));

    return (
        <>
            <Container className="mb-2 mb-lg-5">
                <Row>
                    {pokemons}
                </Row>
            </Container>
            <LoadMoreBtn clickHandler={loadMoreCaught}/>
        </>
    );
}

export default CaughtPokemons;