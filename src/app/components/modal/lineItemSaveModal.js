import React, { useContext, useState } from 'react';
import axios from 'axios';

import './lineItemModal.css';

import Table from '../table/table';
import Button from '../button/button';
import { store } from '../../store/store';
import { APIBase } from '../../config';

export default function LineItemSaveModal({ item }) {
    const storeState = useContext(store);
    const { dispatch } = storeState;

    const [lineItem, setlineItem] = useState(item);

    const save = async () => {
        try {
            await axios.post(`${APIBase}food-item`, lineItem);
        } catch (error) {
            console.error('An error occured posting food item', error);
        }

        dispatch({ type: 'hide_modal'})
    }

    return (
        <div className={'lineItemModalContainer'}>
            <h1>Line Item</h1>
            <Table
                items={[lineItem]}
                onQuantityChange={(e) => setlineItem({ ...lineItem, quantity: Number(e.target.value) })}
            />
            <div className={'buttonContainer'}>
                <Button onClick={() => save()} disabled={!lineItem.quantity}>Save</Button>
                <Button onClick={() => dispatch({ type: 'hide_modal' })}>Cancel</Button>
            </div>
        </div>
    );

}
