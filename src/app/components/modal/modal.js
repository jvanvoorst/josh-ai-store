import React from 'react';

import './modal.css';

export default function Modal({ visible, children }) {
    if (!visible) return null;

    return (
        <div className={'modalBackground'}>
            <div className={'modal'}>{children}</div>
        </div>
    );
}
