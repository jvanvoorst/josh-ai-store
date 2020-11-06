import React, { useContext } from 'react';

import Button from '../button/button';
import { store } from '../../store/store';
import LineItemSaveModal from '../modal/lineItemSaveModal';

import './itemView.css';

export default function ItemView({ items }) {
    return (
        <div className={'tableContainer'}>
            {items.map((i) => (
                <Item key={i.id} item={i} />
            ))}
        </div>
    );
}

function Item({ item }) {
    const storeState = useContext(store);
    const { dispatch } = storeState;

    return (
        <div className={'itemContainer'}>
            <img src={item.image} alt={item.item} />
            <p>{item.description}</p>
            <div>
                <Button
                    onClick={() => {
                        const _item = {
                            item: item.item,
                            quantity: 1,
                            price: item.price,
                        };

                        dispatch({ type: 'show_modal', payload: <LineItemSaveModal item={_item} /> });
                    }}
                >
                    Add To Cart
                </Button>
                <span>{`$ ${item.price.toFixed(2)}`}</span>
            </div>
        </div>
    );
}
