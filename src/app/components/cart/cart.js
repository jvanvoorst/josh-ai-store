import React, { useContext } from 'react';

import Table from '../../components/table/table';
import { store } from '../../store/store';
import LineItemEditModal from '../modal/lineItemEditModal';

import './cart.css';

export default function Cart({ items }) {
    const storeState = useContext(store);
    const { dispatch } = storeState;

    const onEditClick = (i) => {
        dispatch({ type: 'show_modal', payload: <LineItemEditModal item={i} /> });
    };

    return (
        <div className={'cartContainer'}>
            <div>
                <h1>Cart</h1>
                {items.length ? (
                    <>
                        <Table items={items} action={{ onClick: onEditClick, text: 'edit' }} />
                        <h4>Total</h4>
                        <p>{items.reduce((acc, i) => acc + i.price * i.quantity, 0).toFixed(2)}</p>
                    </>
                ) : <h1 className={'emptyText'}>Empty</h1>}
            </div>
        </div>
    );
}
