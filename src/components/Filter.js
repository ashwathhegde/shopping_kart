import React, { Component } from 'react'
import Slider from 'react-rangeslider';
import { connect } from 'react-redux';

import { SET_PRICE_FILTER } from '../store/actions/cartActions';

class Filter extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      value: 10
    }
    
  }

  handleChange = value => {
    this.setState({
      value: value
    })
  };
  
 
  applyFilter = (value) => {
    this.props.setPriceFilter(this.props.products,value);
  };

  render () {
    const { value } = this.state
    // if(this.props.filter.filterApplied === false){
    //     this.setState({value: 10})
    // }
    return (
        
    <div className ="slider-container">    
      <div className='slider'>
        <Slider
          min={1000}
          max={100000}
          value={value}
          onChange={this.handleChange}
          
        />
        <div className='value'>{value}</div>
      </div>
      <div>
          <button className ="btn btn-apply" onClick={(e) => this.applyFilter(value)}>Apply</button>
      </div>
     </div> 
    )
  }
}
const mapStateToProps = (state) => {
    
    return {
        products: state.product,
        cart: state.cart,
        filter:state.filter,
        staticData: state.staticData,
        sortData:state.sortData
    }
};



const mapDispatchToProps = (dispatch) => {
    return {

        setPriceFilter: (data,value) => {
            dispatch({ type: SET_PRICE_FILTER, payload: {data, value } });
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);