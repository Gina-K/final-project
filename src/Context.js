import React, {useState} from "react";

const Context = React.createContext();

function ContextProvider({children}) {
    const [allPokemons, setAllPokemons] = useState([]);
    return (
        <Context.Provider value={{allPokemons}}>
            {children}
        </Context.Provider>
    );
}

export {Context, ContextProvider};