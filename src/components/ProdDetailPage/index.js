import React, {Component} from "react";
import "./style.css";
import {connect} from "react-redux";
import AddCartModal from "../addCartModal";


class ProdDetailPage extends Component{
    state = {
        shouldHide: true
    }
    
    showModal = () => {
        return this.setState({
            shouldHide: false,
        })
    }

    hideModal = ()=> {
        return this.setState({
            shouldHide: true
        })
    }
    render() {
        return(
            this.props.products.map( product => {
                if (Number(this.props.match.params.id) === product.id ) {
                    return (
                        <div key={product.id}>
                            <div className="item-header">
                                <h1>{product.title}</h1>
                            </div>
                            <div className="image-container">
                                <img src={product.img} alt={product.title}className="prod-img"/>
                            </div>
                            <div className="item-container">
                                <h1 className="price">${product.price}</h1>
                                <p>{product.description}</p>
                                <button className="btn btn-primary btn-right" type="submit" onClick={this.showModal}>Add to Cart</button>
                            </div>
                            <AddCartModal shouldHide={this.state.shouldHide} img={product.img} title={product.title} price={product.price} exitModal={this.hideModal}/>
                        </div>
                    )
                } 
                return ('');
            })
        )
    }
}

const mapStateToProps = (state)=> {
    return {
        products: state.products
    }
}
export default connect(mapStateToProps)(ProdDetailPage);



