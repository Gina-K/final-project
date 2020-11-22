import React, {useEffect, useState} from "react";

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

    return (
        <Context.Provider value={{allPokemons, catchPokemon}}>
            {children}
        </Context.Provider>
    );
}

export {Context, ContextProvider};