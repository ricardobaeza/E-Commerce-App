import React from 'react';
import "./style.css";
import {EditCartModal} from "../editCartModal/index"
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
            <div className="cart-item-options">
                <p className="delete" onClick={()=> props.deleteFunction(props.id)}>delete</p>
                <p className="edit" onClick={props.showEdit}>edit</p>
            </div>
            <EditCartModal isHidden={props.isHidden} exitModal={props.exitModal} {...props}/>
        </div>
        
    )
}

export default CartItems;
