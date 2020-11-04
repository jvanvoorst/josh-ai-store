import React from 'react';
import { useHistory } from 'react-router-dom';

import './homeHeader.css';
import Button from '../button/button';

export default function HomeHeader() {
    const history = useHistory();

    return (
        <div className={'homeHeaderContainer'}>
            <div className={'headerText'}>Josh.AI Grocers</div>
            <div className={'link'}>
                <Button onClick={() => history.push('/cart')}>Cart</Button>
            </div>
        </div>
    );
}
