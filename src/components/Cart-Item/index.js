import React from 'react';
import "./style.css";

const CartItems = (props) => {
    return (
        <div className="cart-item-container">
            <div className="cart-Item">
                <div className= "item-content">
                    <img src={props.img} className="cart-img"/>
                    <p>{props.title}</p>
                </div>
                <div>
                    <p>{props.price}</p>
                </div>
            </div>
            <div className="delete">
                <p>delete</p>
            </div>
        </div>
        
    )
}

export default CartItems;
