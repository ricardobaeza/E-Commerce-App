import React, { Component} from "react";
import './style.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {connect} from "react-redux";
import { store } from "../../index"

export class EditCartModal extends Component {
    state = {
        editValue: 0
    }
    
    updateValue = (input)=> {
        let quantity = input.target.value;
        this.setState({
            editValue: quantity
        })
        let itemPackage = {
            newQuantity: quantity,
            currentItemId: this.props.id,
            currentItem: this.props
        }
        this.props.editItem(itemPackage)
    }

    




    render() {
        return (
            <div className="show" hidden={this.props.isHidden}>
                <div className="edit-content-modal">
                    <div id="edit-icon" onClick={this.props.exitModal}>
                        <FontAwesomeIcon icon={"times-circle"} id="icon" />
                    </div>
                    <p id = "quantity-edit">Quantity: </p>
                    <select value= {this.props.editVal} onChange={this.updateValue}>
                        <option></option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                        <option value={6}>6</option>
                        <option value={7}>7</option>
                        <option value={8}>8</option>
                        <option value={9}>9</option>
                        <option value={10}>10+</option>
                    </select>
                </div>
            </div>
        );
    }

               
        
    
    
}

const mapStateToProps = (state)=> {
    return {
        products: state.products,
        Cart: state.userCart
    }
}
export default connect(mapStateToProps)(EditCartModal);
