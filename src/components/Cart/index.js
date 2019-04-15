import React, { Component} from 'react';
import CartItem from "../Cart-Item"
import "./styles.css";
import {connect} from "react-redux";
import { store } from "../../index"
import {EditCartModal} from "../editCartModal/index"


class Cart extends Component {

    state = {
        hidden: true,
        productId: null,
        item: {}
    }
    
    deleteCartItem = (value)=> {
        this.forceUpdate();
        const deleteItem = {
            type: 'delete',
            payload: value
        }
        store.dispatch(deleteItem);
    }

    showEdit = (item) => {
        this.setState({
            hidden: false,
            productId: item.id,
            item: item
        })

        console.log(item);
        console.log(item.id)
    }
    hideEdit = () => {
        this.setState({
            hidden: true
        })
    }

    

    editItem = (itemPackage) => {
        const editItem = {
            type: 'edit',
            payload: {
                newQuantity: itemPackage.newQuantity,
                currentItemId: itemPackage.currentItemId,
                currentItem: itemPackage.currentItem
            }
        }
        store.dispatch(editItem);
    }
    render() {
        if (this.props.Cart.length > 0) {
            return (
                <div>
                    {
                        this.props.Cart.map( (product ,index)=>  <CartItem  {...product.item} 
                                                                  quantity={product.quantity} 
                                                                  key={index} 
                                                                  id={index} 
                                                                  deleteFunction= {this.deleteCartItem}
                                                                  showEdit= {this.showEdit}
                                                                  isHidden={this.state.hidden}
                                                                  exitModal={this.hideEdit}
                                                                  editItem={this.editItem}
                                                                  />)
                    }
                    <EditCartModal isHidden={this.state.hidden} 
                                   item={this.state.item}
                                   editItem={this.editItem}
                                   id={this.state.productId}
                                   exitModal={this.hideEdit}/>
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