import React, { Component } from 'react';
import "./App.css";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch, faShoppingCart, faStroopwafel } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter, Route, NavLink} from "react-router-dom"
import ProductsPage from './components/ProductsPage/index';
import ProdDetailPage from './components/ProdDetailPage/index';
import Cart from './components/Cart/index';
import Navbar from "./components/Navbar/index"

library.add( faSearch, faShoppingCart, faStroopwafel );

class App extends Component {
  render() {
    return (
      <div className="body">
        <BrowserRouter>
          <Navbar />
            <div className="card myContainer">
              <Route path="/" component={ProductsPage} exact/>
              <Route path="/detailsPage" component={ProdDetailPage} />
              <Route path="/cart" component={Cart}/>
            </div>
            
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
