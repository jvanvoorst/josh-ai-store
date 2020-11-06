import { React, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import Header from '../../components/header/header';
import ItemView from '../../components/itemView/itemView';
import Button from '../../components/button/button';
import { store } from '../../store/store';

export default function HomeContainer() {
    const history = useHistory();
    const storeState = useContext(store);
    const { state } = storeState;

    return (
        <>
            <Header button={<Button onClick={() => history.push('/cart')}>{`Cart (${state.cart.length})`}</Button>} />
            <ItemView items={state.foodItems} onItemClick={(i) => console.log('itemClick', i)} />
        </>
    );
}

