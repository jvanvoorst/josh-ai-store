import React from 'react';

import './header.css';

export default function Header({ button }) {
    return (
        <div className={'headerContainer'}>
            <div className={'headerText'}>Josh.AI Grocers</div>
            <div className={'link'}>
                {button}
            </div>
        </div>
    );
}
