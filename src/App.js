import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import HomeContainer from './app/containers/home/home.container';
import CartContainer from './app/containers/cart/cart.container';

function App() {
  return (
    <Router>
      <div>
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
