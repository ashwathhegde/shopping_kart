import React, { Component } from 'react';
import styles from './style.scss';
import PriceList from "./PriceList";
class Product extends Component
{
    state = {
        inCart: this.props.inCart
    };
   
    addToCart = (e) => {
 
        e.preventDefault();
        this.props.addToCart(this.props.product)
        this.setState({
            inCart: true
        })
    }
 
    render() {
       
        const { product } = this.props;
        return (
            <div className="product-card">
               
                    <div className="img-wrap">
                        <img className="img-responsive" src={product.image} />
                    </div>
                    <h6 className="title">{product.name}</h6>
                      
                  
                    <div className="bottom-wrap">
 
                        {
                            this.state.inCart?(
                                <span className="btn btn-success">Added to cart</span>
                            ) : (
                                <a href="#" onClick={this.addToCart} className="btn btn-primary">Add to cart</a>
                            )
                        }
                        <div className="price-wrap">
                           <PriceList product = {product} />
                        </div>
                    </div>
                
            </div>
        )
    }
}
 
export default Product;