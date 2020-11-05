import { React } from 'react';
import { useHistory } from 'react-router-dom';

import Header from '../../components/header/header';
import ItemView from '../../components/itemView/itemView';
import Button from '../../components/button/button';

export default function HomeContainer() {
    const history = useHistory();

    return (
        <>
            <Header button={<Button onClick={() => history.push('/cart')}>Cart</Button>}/>
            <ItemView items={items} onItemClick={(i) => console.log('itemClick', i)}/>
        </>
    );
}

const items = [
    {
        id: 1,
        item: 'Pumpkins',
        image: 'https://images.unsplash.com/photo-1443464812268-44d8bb5f2df5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2048&q=80',
        description: 'A pumpkin is a cultivar of winter squash that is round with smooth, slightly ribbed skin, and is most often deep yellow to orange in coloration. The thick shell contains the seeds and pulp.',
        price: 12
    },
    {
        id: 2,
        item: 'Avocados',
        image: 'https://images.unsplash.com/photo-1449339854873-750e6913301b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80',
        description: 'The avocado, a tree likely originating from south central Mexico, is classified as a member of the flowering plant family Lauraceae.',
        price: 1.5
    },
    {
        id: 3,
        item: 'Oranges',
        image: 'https://images.unsplash.com/photo-1562599938-53b269c207a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=935&q=80',
        description: 'The orange is the fruit of various citrus species in the family Rutaceae; it primarily refers to Citrus × sinensis, which is also called sweet orange, ',
        price: 2.5
    },
    // {
    //     id: 1,
    //     image: 'url',
    //     description: '',
    //     price: 1.5
    // },
    // {
    //     id: 1,
    //     image: 'url',
    //     description: '',
    //     price: 1.5
    // },
    // {
    //     id: 1,
    //     image: 'url',
    //     description: '',
    //     price: 1.5
    // },
    // {
    //     id: 1,
    //     image: 'url',
    //     description: '',
    //     price: 1.5
    // },
    // {
    //     id: 1,
    //     image: 'url',
    //     description: '',
    //     price: 1.5
    // },
    // {
    //     id: 1,
    //     image: 'url',
    //     description: '',
    //     price: 1.5
    // },
    // {
    //     id: 1,
    //     image: 'url',
    //     description: '',
    //     price: 1.5
    // }
];
