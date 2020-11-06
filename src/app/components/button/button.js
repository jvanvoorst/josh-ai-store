import React from 'react';

import './button.css';

export default function Button({ onClick, children, disabled }) {
    return (
        <button className={'button'} onClick={onClick} disabled={disabled}>
            {children}
        </button>
    );
}
