import React, {useContext} from "react";
import {
    Container,
    Row
} from "reactstrap";
import InfiniteScroll from "react-infinite-scroll-component";

import PokemonCard from "../components/PokemonCard";
import {Context} from "../Context";

function AllPokemons() {
    const {allPokemons, downloadData, currentPage, setCurrentPage, loadMore, setItemsLimit, itemsLimit} = useContext(Context);
    const pokemons = allPokemons.map(pokemon => (
        <PokemonCard key={pokemon.id} pokemon={pokemon}/>
    ));

    return (
        <>
            <input style={{position: "fixed"}} type="button" value="Load more" onClick={() => loadMore()}/>
            <Container className="mb-2 mb-lg-5">

                <Row>
                    {/*<InfiniteScroll*/}
                    {/*    next={downloadData}*/}
                    {/*    hasMore={true}*/}
                    {/*    loader={<h4>Loading...</h4>}*/}
                    {/*    dataLength="24">*/}
                    {pokemons}
                    {/*</InfiniteScroll>*/}
                </Row>
            </Container>
        </>
    );
}

export default AllPokemons;