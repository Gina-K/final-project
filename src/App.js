import React from "react";
import {
    Switch,
    Route
} from "react-router-dom";

import Header from "./components/Header";
import AllPokemons from "./pages/AllPokemons";
import CaughtPokemons from "./pages/CaughtPokemons";
import PokemonDetails from "./pages/PokemonDetails";

function App() {
    return (
        <>
            <Header/>
            <Switch>
                <Route exact path="/">
                    <AllPokemons/>
                </Route>
                <Route path="/caught">
                    <CaughtPokemons/>
                </Route>
                <Route path="/details">
                    <PokemonDetails/>
                </Route>
            </Switch>
        </>
    );
}

export default App;