import React from 'react';

import './textButton.css'

export default function TextButton({ children, onClick }) {
    return (
        <div className={'textButton'} onClick={onClick}>
            {children}
        </div>
    );
}