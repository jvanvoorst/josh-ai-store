import { React } from 'react';

import HomeHeader from '../../components/header/homeHeader';
import ItemTable from '../../components/table/itemTable';

import './home.container.css';

export default function HomeContainer() {
    return (
        <div className={'homeContainer'}>
            <HomeHeader />
            <ItemTable />
        </div>
    );
}
