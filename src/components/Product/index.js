import React from "react";
import "./style.css";


const Product =(props) => {

        return (
        
        <div >
            <div className="img-container">
                <img src={props.img} alt={props.title}/>
            </div>
            <div className="prod-info-container">
                <h2>{props.title}</h2>
                <p>{props.rating} stars out of 5</p>
                <p>${props.price}</p>
                <p>{props.description}</p>
            </div>
        </div>)
}


export default Product;