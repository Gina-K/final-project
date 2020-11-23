import React, {useContext} from "react";
import {
    Container,
    Row
} from "reactstrap";

import PokemonCard from "../components/PokemonCard";
import {Context} from "../Context";
import LoadMoreBtn from "../components/LoadMoreBtn";

function AllPokemons() {
    const {allPokemons, loadMoreAll} = useContext(Context);
    const pokemons = allPokemons.map(pokemon => (
        <PokemonCard key={pokemon.id} pokemon={pokemon}/>
    ));

    return (
        <>
            <Container className="mb-2 mb-lg-5">
                <Row>
                    {pokemons}
                </Row>
            </Container>
            <LoadMoreBtn clickHandler={loadMoreAll}/>
        </>
    );
}

export default AllPokemons;