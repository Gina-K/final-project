import React, {useContext} from "react";
import {
    Container,
    Row
} from "reactstrap";

import PokemonCard from "../components/PokemonCard";
import {Context} from "../Context";

function CaughtPokemons() {
    const {allPokemons} = useContext(Context);
    const caughtPokemons = allPokemons
        .filter(pokemon => pokemon.isCaught === true)
        .map(pokemon => (
            <PokemonCard key={pokemon.id} pokemon={pokemon}/>
        ));
    return (
        <Container>
            <Row>
                {caughtPokemons}
            </Row>
        </Container>
    );
}

export default CaughtPokemons;