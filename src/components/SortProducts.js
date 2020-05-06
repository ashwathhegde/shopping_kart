import React, { Component } from 'react'
import { connect } from 'react-redux';
import { SORT_LOW_HIGH, SORT_HIGH_LOW, DISCOUNT } from '../store/actions/cartActions';
class SortProduct extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: 10,
            active:'',
            showMobileData: false,
            showMobileFilter:false
        }
    }
    showMobileMenu = () =>{
        this.setState({showMobileData:true})
    }
    showFilter = () =>{
        this.props.showMobFilter(this.setState({showMobileFilter:true}))
    }
    filterCond = () => {
        return this.props.filter && this.props.filter.filterApplied ? this.props.products.filteredProduct : this.props.products.items
    }
    sortData = (value) => {
        this.setState({active:value})
        this.setState({showMobileData:false})
        this.props.sortFilter(this.filterCond(), value)
    }
    
    isActive = (value) =>{
        return ( (value===this.state.active) ?'active':'');
      }
      
    render() {
        return (
            <div className="sort-wrap">
                <strong className="desk-sort">Sort By</strong>
                  <div className = "mobile-filter">
                     <span className="mob-sort" onClick={this.showMobileMenu}>Sort</span>
                     <span className="mob-sort" onClick={this.showFilter}>Filter</span>
                    </div>
                    <div className = {this.state.showMobileData? "mobile sortMenu" : "mobile"}>
                       <div className ={this.state.showMobileData?"overlay show":"overlay"}> 
                         <div className="popup">
                               
                        <span className ={ 'sort-btn' + " "  + this.isActive(SORT_HIGH_LOW)} onClick={(e) => this.sortData(SORT_HIGH_LOW)}>Price High --- Low </span>
                        <span className ={'sort-btn' + " " + this.isActive(SORT_LOW_HIGH)} onClick={(e) => this.sortData(SORT_LOW_HIGH)}>Price Low -- High</span>
                        <span  className ={"sort-btn" + " "+ this.isActive(DISCOUNT)} onClick={(e) => this.sortData(DISCOUNT)}>Discount </span>
                       </div> 
                       </div> 
                    </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {

    return {
        products: state.product.products,
        staticData: state.product.products,
        cart: state.cart.cart,
        filter: state.filter,
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        sortFilter: (data, value) => {
            dispatch({ type: value, data });
        },
        showMobFilter: (data) => {
            dispatch({ type: 'SHOW_FILTER' });
        }

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SortProduct);