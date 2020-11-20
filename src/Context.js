import React, {useState} from "react";

const Context = React.createContext();

function ContextProvider({children}) {
    const [allPokemons, setAllPokemons] = useState([]);
    return (
        <ContextProvider value={{allPokemons}}>
            {children}
        </ContextProvider>
    );
}

export {Context, ContextProvider};