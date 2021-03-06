import React, {Component} from 'react';
import "./style.css"
import Product from "../Product/index"
import {Link} from "react-router-dom"
import {connect} from "react-redux";
class ProductsPage extends Component {

    state = {
        search: ''
    }

    updateChange = (input) => {
        this.setState({
            search: input.target.value
        })
    }
    render() {
        let filteredProducts = this.props.products.filter(
            (product) => {
                    if (!this.state.search){
                        return product
                    } else if (product.category === this.state.search) {
                        return product
                    } else {
                        return null
                    }
            }
        )
        return(
            <div>
                <div className="header">
                    <h1>Products Page</h1>
                    <div className="form-group" id="filter-container">
                        <label htmlFor="filterSelect" id="filter-products-label">Filter Products: </label>
                        <select className="form-control" value={this.state.value} onChange={this.updateChange} id="filterSelect">
                            <option></option>
                            <option value="tv">TV's</option>
                            <option value="headphones">Headphones</option>
                            <option value="phone">Phones</option>
                            <option value="action-camera">Cameras</option>
                            <option value="watch">Watches</option>
                            <option value="refrigerator">Refigerators</option>
                            <option value="small-appliance">Stand Mixers</option>
                        </select>
                        
                    </div>
                </div>
                <div className="main-content">
                        {
                            filteredProducts.map(product =>     <div className="product-card" key={product.id}>
                                                                    <Link to={`/detailsPage/${product.id}`} >
                                                                    <Product 
                                                                         title={product.title} 
                                                                         description={product.description}
                                                                         price={product.price}
                                                                         rating={product.rating}
                                                                         img={product.img} 
                                                                         />
                                                                    </Link>
                                                                </div>
                            )          
                        }
                </div>
            </div>
            
        )
    }
}

const mapStateToProps = (state)=> {
    return {
        products: state.products,
        Cart: state.userCart
    }
}
export default connect(mapStateToProps)(ProductsPage);