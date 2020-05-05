import { SET_PRICE_FILTER, SORT_LOW_HIGH, SORT_HIGH_LOW, DISCOUNT, SEARCH_PRODUCTS } from "../actions/cartActions";

const filterReducer = (state = {}, action) => {
    switch (action.type) {
        case SET_PRICE_FILTER:
        case SORT_LOW_HIGH:
        case SORT_HIGH_LOW:
        case DISCOUNT:
        case SEARCH_PRODUCTS:
            return {
                filterApplied: true
            }
        case 'SHOW_FILTER':
            return {showFilter : true}    
        default:
            return state;

    }
};

export default filterReducer;