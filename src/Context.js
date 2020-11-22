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
        const today = new Date().toLocaleDateString("en-GB", {day: "2-digit", month: "long", year: "numeric"});
        const updatedArray = allPokemons.map(pokemon => {
            if (pokemon.id === id) {
                return {...pokemon, isCaught: true, captureDate: today};
            }
            return pokemon;
        });
        setAllPokemons(updatedArray);
    }

    return (
        <Context.Provider value={{allPokemons, catchPokemon}}>
            {children}
        </Context.Provider>
    );
}

export {Context, ContextProvider};