import React, {useEffect, useState} from "react";
import {Button} from "reactstrap";

const Context = React.createContext();

function ContextProvider({children}) {
    const [allPokemons, setAllPokemons] = useState([]);
    const url = "http://localhost:3004/pokemons";

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => setAllPokemons(data))
    }, []);

    function catchPokemon(id) {
        let caughtPokemon;
        const today = new Date().toLocaleDateString("en-GB", {day: "2-digit", month: "long", year: "numeric"});
        const updatedArray = allPokemons.map(pokemon => {
            if (pokemon.id === id) {
                caughtPokemon = {...pokemon, isCaught: true, captureDate: today};
                return caughtPokemon;
            }
            return pokemon;
        });
        setAllPokemons(updatedArray);
        putUpdate(caughtPokemon);
    }

    function putUpdate(pokemon) {
        let updateUrl = `${url}/${pokemon.id}`;
        fetch(updateUrl, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(pokemon),
        })
            .then(response => response.json())
            .then(data => console.log(data));
    }

    function buttonRender(pokemon) {
        if (pokemon.isCaught) {
            return <Button color="secondary"
                           disabled
            >Caught</Button>
        } else {
            return <Button color="success"
                           onClick={() => catchPokemon(pokemon.id)}
            >Catch!</Button>
        }
    }

    function getPokemonFromAddressBar() {
        let path = window.location.pathname;
        let pokemonName = path.substr(path.lastIndexOf("/") + 1);
        if (allPokemons.length > 0) {
            return allPokemons.filter(pokemon => pokemon.name === pokemonName)[0];
        } else {
            return fetch(`${url}?name=${pokemonName}`)
                .then(response => response.json())
                .then(data => data[0]);
        }
    }

    return (
        <Context.Provider value={{allPokemons, buttonRender, getPokemonFromAddressBar}}>
            {children}
        </Context.Provider>
    );
}

export {Context, ContextProvider};