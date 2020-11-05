import React, { useContext, useState } from 'react';

import './lineItemModal.css';

import Table from '../table/table';
import Button from '../button/button';
import { store } from '../../store/store';

export default function LineItemModal({ item }) {
    const storeState = useContext(store);
    const { dispatch } = storeState;

    const [lineItem, setlineItem] = useState(item);

    return (
        <div className={'lineItemModalContainer'}>
            <h1>Line Item</h1>
            <Table
                items={[lineItem]}
                action={{ text: 'remove', onClick: (i) => console.log('remove', i) }}
                onQuantityChange={(e) => setlineItem({ ...lineItem, quantity: e.target.value })}
            />
            <div className={'buttonContainer'}>
                <Button onClick={(i) => console.log('save', i)}>Save</Button>
                <Button onClick={() => dispatch({ type: 'hide_modal' })}>Cancel</Button>
            </div>
        </div>
    );
}
