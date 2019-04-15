import React, { Component} from 'react';
import CartItem from "../Cart-Item"
import "./styles.css";
import {connect} from "react-redux";
import { store } from "../../index"


class Cart extends Component {

    
    deleteCartItem = (value)=> {
        this.forceUpdate();
        const deleteItem = {
            type: 'delete',
            payload: value
        }
        store.dispatch(deleteItem);
    }
    render() {
        if (this.props.Cart.length > 0) {
            return (
                <div>
                    {
                        this.props.Cart.map( (product ,index)=>  <CartItem  {...product.item} quantity={product.quantity} key={index} id={index} deleteFunction= {this.deleteCartItem}/>)
                    }
                </div>
            )
        } else {
            return <div>Cart is empty</div>
        }
        
    }
}

// export default Cart;


const mapStateToProps = (state)=> {
    return {
        products: state.products,
        Cart: state.userCart
    }
}
export default connect(mapStateToProps)(Cart);