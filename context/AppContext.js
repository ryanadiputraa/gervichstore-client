import { createContext, useContext, useReducer } from "react";

const AppContext = createContext();

export let globalState = {
    cart: {
        count: 0,
        products: [],
    },
    notification: {
        count: 0,
        messages: [],
    },
    searchResult: {},
};

export const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return {
                ...state,
                cart: {
                    count: state.cart.count + 1,
                    products: [...state.cart.products, { name: action.input }],
                },
            };
        case "SET_SEARCH_RESULT":
            return {
                ...state,
                searchResult: action.payload,
            };
        default:
            return state;
    }
};

// context provider
export const ContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, globalState);
    // context wrapper
    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {children}
        </AppContext.Provider>
    );
};

// context consumer
export const useAppContext = () => useContext(AppContext);
