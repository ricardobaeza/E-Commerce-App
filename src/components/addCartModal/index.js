import React, {Component} from "react";
import "./styles.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { store } from "../../index"


class AddCartModal extends Component {

    state = {
        CartItem: {},
        hidden: true
    }

    
    addToCart = (value)=> {
        const addItem = {
            type: 'add',
            payload: {
                item: this.props,
                quantity: value.state.quantity
            }
        }
        store.dispatch(addItem);
    }

    updateId = (input) =>{
        let value = input.target.value
        this.setState({
            quantity: value
        })
    }
    
    showSuccess =()=> {
        this.setState({
            hidden: false
        })
        setTimeout(this.props.exitModal, 1000)
    }

    render() {
        return (
            <div className={this.props.shouldHide ? 'hidden' : "show"}>
                <div className="my-modal-content">
                    <div id="icon-container" onClick={this.props.exitModal}>
                        <FontAwesomeIcon icon={"times-circle"} id="icon"/>
                    </div>
                    <div className="header">
                        <h2>Add Item to Cart</h2>
                    </div>
                    <div className= "add-cart-container">
                        <div>
                            <img src={this.props.img} alt={this.props.title} id="add-cart-img"/>
                            <span>{this.props.title}</span>
                        </div>
                            <span id="price">{this.props.price}</span>
                    </div>
                    <div className="form-group">
                        {/* <form className="add-cart-form" onSubmit={()=> this.addToCart(this)}> */}
                        <div className="add-cart-form">
                            <div className="quantity-container">
                                <span>Quantity: </span>
                                <select className="form-control" value={this.state.quantity} onChange={this.updateId} id="quantity">
                                    <option></option>
                                    <option value= {1}>1</option>
                                    <option value= {2}>2</option>
                                    <option value= {3}>3</option>
                                    <option value= {4}>4</option>
                                    <option value= {5}>5</option>
                                    <option value= {6}>6</option>
                                    <option value= {7}>7</option>
                                    <option value= {8}>8</option>
                                    <option value= {9}>9</option>
                                    <option value= {10}>10</option>
                                </select>
                            </div>
                            <button type="submit" className="btn btn-primary" onClick={()=> {this.addToCart(this); this.showSuccess()}}>Add</button>
                        </div>
                        <div className="alert alert-success" role="alert" hidden={this.state.hidden}>
                                item successfully added to cart
                        </div>
                            
                            
                        {/* </form> */}
    
                    </div>
                </div>
            </div>
        )
    }
    
}

export default AddCartModal;
