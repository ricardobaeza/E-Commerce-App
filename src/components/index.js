import React, {Component} from 'react';
import { BrowserRouter, Route, Switch} from "react-router-dom"
import ProductsPage from './ProductsPage/index';
import ProdDetailPage from './ProdDetailPage/index';
import Cart from './Cart/index';
import "./style.css";

class ContentPage extends Component {

    render() {
        return(
            <div className="card" id="main-content">
                <BrowserRouter>
                    <Route path="/" component={ProductsPage} exact/>
                    <Route path="/detailsPage" component={ProdDetailPage} />
                    <Route path="/cart" component={Cart}/>
                </BrowserRouter>
            </div>
            
        )
    }
}

export default ContentPage;
