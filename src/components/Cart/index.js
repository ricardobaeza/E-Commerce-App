import React, { Component} from 'react';
import CartItem from "../Cart-Item"
import "./styles.css"
class Cart extends Component {
    render() {
        const item = {
            "id": 8,
            "title": "Samsung - Galaxy S10 with 128GB Memory Cell Phone",
            "description": "Premium experience that exceeds any and all expectations. A ridiculously powerful Pro-grade Camera, intelligent battery, in-display Ultrasonic Fingerprint ID and an immersive cinematic screen in a slim, balanced form. Galaxy S10+ takes your Galaxy to the next level.",
            "img": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6323/6323532_sd.jpg",
            "price": 849.99,
            "rating": 4.7,
            "category": "phone"
          }
        return (
            <div>
                <div className="header">
                    <h1>Your Cart</h1>
                </div>
                <div className="Item-Row">
                    <CartItem {...item}/>
                </div>
                <div className="Item-Row">
                    <CartItem {...item}/>
                </div>
            </div>
        )
    }
}

export default Cart;