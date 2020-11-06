import React, { createContext, useReducer } from 'react';

const initialState = {
    modalVisible: false,
    modalContent: null,
    foodItems: [],
    cart: []
};

const store = createContext(initialState);
const { Provider } = store;

const StoreProvider = ({ children }) => {
    const [state, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case 'show_modal':
                return {
                    ...state,
                    modalContent: action.payload,
                    modalVisible: true,
                };
            case 'hide_modal':
                return {
                    ...state,
                    modalContent: null,
                    modalVisible: false,
                };
            case 'set_food_items':
                return {
                    ...state,
                    foodItems: action.payload
                }
            case 'set_cart':
                return {
                    ...state,
                    cart: action.payload
                }
            default:
                throw new Error();
        }
    }, initialState);

    return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StoreProvider };
