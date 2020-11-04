import React from 'react';
import Button from '../button/button';

import './itemTable.css';

export default function ItemTable({ items, onItemClick }) {
    return (
        <div className={'tableContainer'}>
            {items.map((i) => <Item key={i.id} item={i} onItemClick={() => onItemClick(i.id)}/>)}
        </div>
    );
}

function Item({ item, onItemClick }) {
    return (
        <div className={'itemContainer'}>
            <img src={item.image} alt={item.item} />
            <p>{item.description}</p>
            <div>
                <Button onClick={onItemClick}>Add To Cart</Button>
                <span>{`$ ${item.price.toFixed(2)}`}</span>
            </div>
        </div>
    )
}