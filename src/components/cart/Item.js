import React, { Component } from 'react';
import { connect } from 'react-redux';
import { UPDATE_CART_QUANTITY, REMOVE_FROM_CART } from '../../store/actions/cartActions';
import PriceList from "../PriceList";
 
class Item extends Component {
 
    constructor(props) {
        super(props);
 
        this.state = {
            quantity: this.props.item.quantity
        };
    }
   
 
    handleSubmit = (e, value) => {
        this.setState({
            quantity:e,
            
        });
        this.props.updateCartQuantity(this.props.item.product.productId, this.state.quantity, value);
 
    }
 
    handleRemove = (e) => {
        this.props.removeFromCart(this.props.item.product.productId);
    }
 
  render() {
 
      const { item } = this.props;

 
      return (
          
          <div className="details-wrap">
              <div className="boxes img-block">
                  <img className="img-responsive" src={item.product.image} />
              </div>
              <div className="boxes items-block">
                  <div className="product-name">{item.product.name}</div>
                  <PriceList product = {item.product}/>
              </div>
              <div className="boxes qty-block">
                  
                      <i class="fa fa-plus-circle" aria-hidden="true" onClick={ () => this.handleSubmit((this.state.quantity =  this.state.quantity + 1),  "INC")} ></i>
                      <form>
                          <input type="text" className="input-sm" readOnly value={this.state.quantity}/>
                       </form>
                      <i class="fa fa-minus-circle" aria-hidden="true" onClick={ () => this.handleSubmit((this.state.quantity > 1? this.state.quantity = this.state.quantity - 1:this.state.quantity ), (this.state.quantity > 1? "DEC":""))}></i>
              </div>
              <div className="boxes remove-block">
                <span type="button" onClick={this.handleRemove} className="remove">
                    Remove
                </span>
              </div>
          </div>
      )
  }
}
 
const mapDispatchToProps = (dispatch) => {
 
    return {
        updateCartQuantity: (productId, quantity, value) => dispatch({type:UPDATE_CART_QUANTITY, payload:{productId,
            quantity: quantity, value : value}}),
        removeFromCart: (productId) => dispatch({type:REMOVE_FROM_CART, payload:{productId:productId}})
    }
};
 
export default connect(null, mapDispatchToProps)(Item);