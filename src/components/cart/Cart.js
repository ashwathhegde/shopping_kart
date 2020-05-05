import React, { Component } from 'react';
import Item from './Item';
import { connect } from 'react-redux';
import styles from "../style.scss";
class Cart extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {
        let total = 0;
        let origianPrice = 0;
        let quantity = 0;
        this.props.cart.map((item) => {
            total += item.product.price.actual * item.quantity;
            origianPrice += item.product.price.display * item.quantity;
            quantity = quantity + item.quantity ;
        });
        
        const cart = this.props.cart.length > 0 ? (
            <div>
                <div className="cart-items">
                    {
                        this.props.cart.map(item => {
                            return (
                                <div key={item.product.productId}>
                                    <Item item={item} />

                                </div>
                            )
                        })
                    }
                </div>
                <div className="cart-price">
                    <div className="heading">
                        Price Details
</div>
                    <hr />
                    <div className="item-cal">
                        <div className ="row">
                            <span className="price-head">
                                Price ({quantity} item) 

                            </span>
                            <span className="price-value">&#x20b9;{origianPrice}</span>
                        </div>
                        <div>
                            <span className="price-head">
                                Discount
</span>
                            <span className="price-value">&#x20b9;{origianPrice - total}</span>
                        </div>
                    </div>
                    <hr />
                    <div className = "row">
                        <span className="price-head">
                            <strong>Total Payable</strong>
                        </span>
                        <span className="price-value">
                            {console.error("origianPrice", total)}
                            <strong>&#x20b9;{total}</strong>
                        </span>

                    </div>
                </div>
            </div>

        ) : (
                <div className="panel-body">
                    <p>Cart is empty</p>
                </div>
            )

        return (
            <div className="cart-container-fluid">
                <div className="cart-container">
                    {cart}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart.cart
    }
};
export default connect(mapStateToProps)(Cart);