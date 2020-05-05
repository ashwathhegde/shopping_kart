import React, { Component } from 'react'
import { connect } from 'react-redux';

class Search extends Component {

    constructor (props, context) {
        super(props, context)
        this.state = {
            query: '',
        }
      }
    
      handleInputChange = (e) => {
        this.setState({
          query: e.target.value
        })
        this.props.searchInput( e.target.value)
      }
      filterCond = () => {
        return this.props.filter && this.props.filter.filterApplied ? this.props.products.filteredProduct : this.props.products.items
    }
     
     
      render() {
        return (
          <form>
            <input
              ref={input => this.search = input}
              placeholder ="Search"
              onChange={this.handleInputChange}
              value = {this.state.query}
            />
            
          </form>
        )
      }
     }


const mapDispatchToProps = (dispatch) => {
    return {
        searchInput: ( value) => {
            dispatch({ type: 'SEARCH_PRODUCTS', payload: {  value } });
        }
    }
};

export default connect(null, mapDispatchToProps)(Search);


