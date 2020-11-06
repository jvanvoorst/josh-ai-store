import React, { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import socketIOClient from 'socket.io-client';

import HomeContainer from './app/containers/home/home.container';
import CartContainer from './app/containers/cart/cart.container';
import Modal from './app/components/modal/modal';
import { store } from './app/store/store';
import { APIBase } from './app/config';
import { socketIOEndpoint } from './app/config';

function App() {
    const storeState = useContext(store);
    const { state, dispatch } = storeState;

    useEffect(() => {
        const fetchFoodItems = async () => {
            try {
                const res = await axios.get(`${APIBase}food-items`);
                dispatch({ type: 'set_food_items', payload: res.data });
            } catch (error) {
                console.error('An error occured fetching data', error);
            }
        };

        const fetchCart = async () => {
            try {
                const res = await axios.get(`${APIBase}cart`);
                dispatch({ type: 'set_cart', payload: res.data });
            } catch (error) {
                console.error('An error occured fetching data', error);
            }
        };

        fetchFoodItems();
        fetchCart();
    }, [dispatch]);

    // useEffect(() => {
    //   const socket = socketIOClient(socketIOEndpoint);

    //   socket.on('cart_update', (data) => {
    //     dispatch({ type: 'set_cart', payload: data});
    //   });
    // })

    return (
        <Router>
            <div>
                <Modal visible={state.modalVisible}>{state.modalContent}</Modal>
                <Switch>
                    <Route path="/cart">
                        <CartContainer />
                    </Route>
                    <Route path="/">
                        <HomeContainer />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
