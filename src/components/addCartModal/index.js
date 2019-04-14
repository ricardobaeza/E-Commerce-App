import React from "react";
import "./styles.css";
import {FontAwesome, FontAwesomeIcon} from "@fortawesome/react-fontawesome"

const AddCartModal = (props) => {

    console.log(props);
    return (
        <div className={props.shouldHide ? 'hidden' : "show"}>
            <div className="my-modal-content">
                <div id="icon-container" onClick={props.exitModal}>
                    <FontAwesomeIcon icon={"times-circle"} id="icon"/>
                </div>
                <div className="header">
                    <h2>Add Item to Cart</h2>
                </div>
                <div className= "add-cart-container">
                    <div>
                        <img src={props.img} alt={props.title} id="add-cart-img"/>
                        <span>{props.title}</span>
                    </div>
                        <span id="price">{props.price}</span>
                </div>
                <div className="form-group">
                    <form className="add-cart-form">
                        <div className="quantity-container">
                            <span>Quantity: </span>
                            <select className="form-control" id="quantity">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                            </select>
                        </div>
                        
                        <button type="submit" className="btn btn-primary">Add</button>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default AddCartModal;
