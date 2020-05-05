import productReducer from './productReducer';
import cartReducer from './cartReducer';
import priceFilter from "./priceFilter";
import { combineReducers } from 'redux';
 
const rootReducer = combineReducers({
    product: productReducer,
    cart: cartReducer,
    filter:priceFilter
});
 
export default rootReducer;