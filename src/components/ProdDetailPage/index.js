import React, {Component} from "react"
import "./style.css"

const ProdDetailPage = () => {
        const props = {
                "id": 16,
                "title": "Garmin - Forerunner 235",
                "description": "Garmin Forerunner 235 GPS Running Watch: Make the most of your workout with this watch, which uses a wrist-based Elevate heart rate monitor to calculate your VO2 max.",
                "img": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4686/4686204_sd.jpg",
                "price": 219.99,
                "rating": 4.5,
                "category": "watch"
              };
        return(
            <div>
                <div className="item-header">
                    <h1>{props.title}</h1>
                </div>
                <div className="image-container">
                    <img src={props.img} className="prod-img"/>
                </div>
                <div className="item-container">
                    <h1 className="price">${props.price}</h1>
                    <p>{props.description}</p>
                    <button className="btn btn-primary btn-right">Add to Cart</button>
                </div>


            </div>
        )
}
export default ProdDetailPage;