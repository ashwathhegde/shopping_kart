import React, { Component } from 'react';
import styles from './style.scss';
const PriceList = (props) => {
    console.log("PriceList",props.product.product)
    return (
        <section>
            <i class="fa fa-inr" aria-hidden="true"></i> <span className="price price-new">{props.product.price.actual} </span>
            <span className="price price-old">{props.product.price.display}</span>
            <span className="price discount">{props.product.discount}% off</span>
        </section>
    )
}
export default PriceList;