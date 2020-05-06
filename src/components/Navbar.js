import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import styles from './style.scss';
import Search from "./Search";
class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showSearch : false
        };
        
    }
    
    showSearch = () =>{
        this.setState ({
            showSearch: true
        })
    }
    resetState = () => {
        this.props.setToInitialState();
    }

    render() {
        
        this.props.cartUpdated();
        
        let total = 0;
        this.props.cart.map(item => total += item.product.price.actual * item.quantity);
        return (
             
            <div className="navbar-wrap">
                <nav className="navbar">
                   <div className="navbar-header">
                        <NavLink className="navbar-brand" to="/">
                            <i className="fa fa-truck" aria-hidden="true" onClick={this.resetState}></i>
                        </NavLink>
                    </div>
                    <div className="navbar-right" >
                        <ul>
                            <li> { this.state.showSearch ? <Search  /> :""  }</li>
                            <li><i className="fa fa-search" aria-hidden="true" onClick ={ this.showSearch } ></i>
                               
                            </li>
                            <li><NavLink to="/my-cart">
                                {
                                    this.props.cart.length > 0 ? (
                                        <span className="label label-info">{ this.props.cart.length }</span>
                                    ) : null
                                }
                                <i className="fa fa-shopping-cart" aria-hidden="true"></i></NavLink></li>
                        </ul>
                    </div>
                    </nav> 
                </div>    

           
        )
    }
}
 
const mapStateToProps = (state) => {
 
    return {
        cart: state.cart.cart,
        cartUpdated: () => { return true },
        products: state.product.products,
        staticData: state.product.products,
        filter: state.filter,
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        setToInitialState : (data) => {
            dispatch({ type: "INIT_STATE" });
        },
    }
};
 
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);