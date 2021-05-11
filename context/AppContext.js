import { createContext, useContext } from "react";

const AppContext = createContext();

export let globalState = {
    text: "blah",
    test: 0,
};

export const reducer = (state = globalState, action) => {
    switch (action.type) {
        case "INCREMENT":
            return {
                ...state,
                test: state.test + 1,
            };
        default:
            return state;
    }
};

// context provider
export const ContextProvider = ({ children }) => {
    // context wrapper
    return (
        <AppContext.Provider value={globalState}>
            {children}
        </AppContext.Provider>
    );
};

// context consumer
export const useAppContext = () => useContext(AppContext);
