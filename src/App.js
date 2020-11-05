import React, { useContext } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import HomeContainer from './app/containers/home/home.container';
import CartContainer from './app/containers/cart/cart.container';
import Modal from './app/components/modal/modal';
import { store } from './app/store/store';

function App() {
  const storeState = useContext(store);
  const { state } = storeState;

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
