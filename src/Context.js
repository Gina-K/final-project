import React from "react";

const Context = React.createContext();

function ContextProvider({children}) {
    return (
        <ContextProvider value="">
            {children}
        </ContextProvider>
    );
}

export {Context, ContextProvider};