import React from 'react';

import TextButton from '../button/textButton';

import './table.css';

export default function Table({ items, action, onQuantityChange }) {
    return (
        <table>
            <tbody className={'table'}>
                <tr>
                    <th>Item</th>
                    <th>quantity</th>
                    <th>unit price</th>
                    <th>line total</th>
                </tr>
                {items.map((i) => (
                    <tr key={i.item}>
                        <td>{i.item}</td>
                        {onQuantityChange ? (
                            <td>
                                <input
                                    value={i.quantity}
                                    onChange={(e) => onQuantityChange(e)}
                                    type={'number'}
                                    className={'tableInput'}
                                    min={'1'}
                                />
                            </td>
                        ) : (
                            <td>{i.quantity}</td>
                        )}
                        <td>{i.price.toFixed(2)}</td>
                        <td>{(i.price * i.quantity).toFixed(2)}</td>
                        {action ? <td>
                            <TextButton onClick={() => action.onClick(i)}>{action.text}</TextButton>
                        </td> : null}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
