import React, { Component } from 'react';
import Product from './Product';
import SortProducts from "./SortProducts"
import { connect } from 'react-redux';
import { ADD_TO_CART } from "../store/actions/cartActions";
import Filter from "./Filter";
import styles from './style.scss';

class ProductList extends Component {
    addToCart = (product) => {
        this.props.addToCart(product);
    }
    
   
    render() {
        let data =[]
        if(this.props.filter.filterApplied){
            
            data = this.props.products.filteredProduct
        } else {
            data = this.props.products.items
        }
        
        return (
            <div className="main-container">
                <div class={this.props.filter && this.props.filter.showFilter ? "side-nav showFilter": "side-nav"}>
                    <div className ={this.props.filter && this.props.filter.showFilter?"overlay show":"overlay"}>
                       <div className ="popup">
                          <Filter />
                        </div> 
                    </div>
                </div>
                <div className="product-list-container">
                    <SortProducts />

                    {
                      data.length ? data.map(product => <Product product={product} addToCart={this.addToCart} inCart={this.props.cart.length > 0 && this.props.cart.filter(e => e.productId === product.productId).length > 0} key={product.productId} />):"No Product Founds"
                    }


                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {

    return {
        products: state.product.products,
        staticData : state.product.products,
        cart: state.cart.cart,
        filter: state.filter,
        sortData:state.sortData

    }
};

const mapDispatchToProps = (dispatch) => {
    let value = "ADD"
    return {
   
        addToCart: (product) => {
            dispatch({ type: ADD_TO_CART, payload: { product, quantity: 1, value:value } });
        },
        filterPriceList: (range) => {
            dispatch({ type: 'UPDATE_LIST', payload:{range} });
        }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(ProductList)