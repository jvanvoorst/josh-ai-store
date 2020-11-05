import React from 'react';
import { useHistory } from 'react-router-dom';

import Header from '../../components/header/header';
import Button from '../../components/button/button';
import Cart from '../../components/cart/cart';

export default function CartContainer() {
    const history = useHistory();

    return (
        <>
            <Header button={<Button onClick={() => history.push('/')}>Home</Button>} />
            <Cart items={items} />
        </>
    );
}

const items = [
    {
        id: 1,
        item: 'Oranges',
        quantity: 2,
        price: 1.5,
    },
    {
        id: 2,
        item: 'Avacados',
        quantity: 2,
        price: 1.5,
    },
    {
        id: 3,
        item: 'Bananas',
        quantity: 2,
        price: 1.5,
    },
];
