import React from 'react';
import "./style.css";

const CartItems = (props) => {
    return (
        <div className="cart-item-container">
            <div className="cart-Item">
                <div className= "item-content">
                    <img src={props.img} alt={props.title} className="cart-img"/>
                    <p className="item-title">{props.title}</p>
                </div>
                <div className= "price-quantity-container">
                    <p className="cart-item-options">Quantity: {props.quantity}</p>
                    <p className="cart-item-options"> {props.price}</p>
                </div>
            </div>
            <div className="delete">
                <p className="cart-item-options" onClick={()=> props.deleteFunction(props.id)}>delete</p>
            </div>
        </div>
        
    )
}

export default CartItems;
