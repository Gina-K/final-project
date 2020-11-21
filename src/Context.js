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
        const updatedArray = allPokemons.map(pokemon => {
            if (pokemon.id === id) {
                console.log(`${id} caught`);
                return {...pokemon, isCaught: true}
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