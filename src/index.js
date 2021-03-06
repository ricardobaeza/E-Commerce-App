import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css'
import { Provider } from "react-redux";
import { createStore, combineReducers } from '../../../../Library/Caches/typescript/3.4.3/node_modules/redux';
import  productsReducer from "./reducers/product-reducer";
import  userCart  from "./reducers/userCart";


const allReducers = combineReducers({
  products: productsReducer,
  userCart: userCart
})

export const store = createStore(allReducers, window.devToolsExtension && window.devToolsExtension());



ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
