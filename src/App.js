import React from "react";

import Header from "./components/Header";
import AllPokemons from "./pages/AllPokemons";
import CaughtPokemons from "./pages/CaughtPokemons";
import PokemonDetails from "./pages/PokemonDetails";

function App() {
    return(
        <>
            <Header/>
            <AllPokemons/>
            <CaughtPokemons/>
            <PokemonDetails/>
        </>
    );
}

export default App;