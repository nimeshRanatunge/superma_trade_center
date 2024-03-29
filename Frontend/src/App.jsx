import Home from './pages/Home';

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import ProductList from './pages/ProductList';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Register from './pages/Register';


const App = () => {
    const user = true;
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route path="/products">
                    <ProductList/>
                </Route>
                <Route path="/product/:id">
                    <Product/>
                </Route>
                <Route path="/cart">
                    <Cart/>
                </Route>
                <Route path="/login">
                    {user ? <Redirect to="/"/> : <Login/>}
                </Route>
                <Route path="/register">
                    <Register/>
                </Route>
            </Switch>
        </Router>
    );
  };
  
  export default App;