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
            case 'log_store_state':
                console.log('Store State-', state);
                return state;
            case 'add_item_to_cart':
                return {
                    ...state,
                    cart: [
                        ...state.cart,
                        action.payload
                    ]
                };
            default:
                throw new Error();
        }
    }, initialState);

    return <Provider value={{ state, dispatch }}>{children}</Provider>
}

export { store, StoreProvider };