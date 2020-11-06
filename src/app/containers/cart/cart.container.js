import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import Header from '../../components/header/header';
import Button from '../../components/button/button';
import Cart from '../../components/cart/cart';
import { store } from '../../store/store';

export default function CartContainer() {
    const history = useHistory();
    const storeState = useContext(store);
    const { state } = storeState;

    return (
        <>
            <Header button={<Button onClick={() => history.push('/')}>Home</Button>} />
            <Cart items={state.cart} />
        </>
    );
}
