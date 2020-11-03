import React, { createContext, useReducer } from 'react';

const initialState = {
    cart: [{
        item: 'test',
        itemQuantity: 1,
        itemUrl: 'something'
    }]
};

const store = createContext(initialState);
const { Provider } = store;

const StoreProvider = ({ children }) => {
    const [state, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case 'add_item_to_cart':
                const newState = {
                    cart: [
                        // ...currentcart,
                        action.payload
                    ]
                };
                return newState;
            default:
                throw new Error();
        }
    }, initialState);

    return <Provider value={{ state, dispatch }}>{children}</Provider>
}

export { store, StoreProvider };