import React from "react";
import "./style.css";

const Product = (props) => {
    console.log(props);
    return (
        <div className="product-card">
            <div className="img-container">
                <img src={props.img}/>
            </div>
            <div className="prod-info-container">
                <h2>{props.title}</h2>
                <p>{props.rating}</p>
                <p>${props.price}</p>
                <p>{props.description}</p>
            </div>
        </div>
    )
}
export default Product;