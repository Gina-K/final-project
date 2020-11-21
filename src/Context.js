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

    return (
        <Context.Provider value={{allPokemons}}>
            {children}
        </Context.Provider>
    );
}

export {Context, ContextProvider};