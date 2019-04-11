import React, {Component} from 'react';
import "./style.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Product from "../Product/index"

class ProductsPage extends Component {
    render() {
        const tv = {
            "id": 1,
            "title": "Toshiba - 49” Class – LED - 1080p",
            "description": "Toshiba HDTV Fire TV Edition is a new generation of smart TVs featuring the Fire TV experience built-in and including a Voice Remote with Alexa.",
            "img": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6211/6211009_sd.jpg",
            "price": 199.99,
            "rating": 4.6,
            "category": "tv"
          }
        return(
            <div>
                <div className="header">
                    <h1>Products Page</h1>
                    <div className="search-container">
                        <input className="input" />
                        <button className="search-btn"><FontAwesomeIcon icon="search"/></button>
                    </div>
                </div>
                <div className="main-content">
                    <Product 
                        img={tv.img}
                        title={tv.title} 
                        rating={tv.rating}
                        price={tv.price} 
                        description={tv.description}
                        />
                </div>
            </div>
            
        )
    }
}
export default ProductsPage;