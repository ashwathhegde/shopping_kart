
import _products from "../../assets/cart.json"
import { SET_PRICE_FILTER, SORT_HIGH_LOW, SORT_LOW_HIGH, DISCOUNT, SEARCH_PRODUCTS } from "../actions/cartActions.js";
let updatedList = []
let newState = {}
let oldState = {}
const productReducer = (state = {}, action) => {
 switch (action.type) {

    case SET_PRICE_FILTER:
      oldState = Object.freeze(state);
      updatedList = getFilterData(action.payload.data.products.items, action.payload.value)
      let filterWithSort;
      if(action.payload.data && action.payload.data.sortfilter){
         
         if(action.payload.data.sortfilter === 'high'){
          filterWithSort = sortByPrice(updatedList, "actual", "high")
         } else if(action.payload.data.sortfilter === 'low'){
          filterWithSort = sortByPrice(updatedList, "actual", "low")
         } else if(action.payload.data.sortfilter === 'discount'){
          filterWithSort = sortDis(updatedList, "discount")
         }
         
         return updatedState(state, filterWithSort, action.payload.data.sortfilter)
      }
      return updatedState(state, updatedList)
    case SORT_HIGH_LOW:
      updatedList = sortByPrice(action.data, "actual", "high")
      return { ...updatedState(state, updatedList, "high")}
    case SORT_LOW_HIGH:
      updatedList = sortByPrice(action.data, "actual", "low")
      return {...updatedState(state, updatedList, "low") }
    case DISCOUNT:
      updatedList = sortDis(action.data, "discount")
      return {...updatedState(state, updatedList,"discount")} 
    case SEARCH_PRODUCTS:
      oldState = Object.freeze(state);
      updatedList = searchProduct(oldState, action.payload.value)
      return updatedState(state, updatedList)
    case "INIT_STATE":
      return {...state, sortfilter:false};  
    default:
      state.products = _products
      return state;
  }
};
const searchProduct = (data, value) => {
  return data.products.items.filter(item => item.name.toLowerCase().indexOf(value.toLowerCase()) > -1)

}
const updatedState = (state, updatedList,value) => {
  newState = { ...state }
  newState.products.filteredProduct = updatedList
  return { ...newState, sortfilter:value };

}

const sortByPrice = (arr, field, sortBy) => {
   
  return arr.sort(function (a, b) {
    if ( (sortBy === "high" && a.price[field] > b.price[field]) || (sortBy === "low" && b.price[field] > a.price[field])) {
      return -1;
    }
    if ((sortBy === "high" && b.price[field] > a.price[field]) || (sortBy === "low" && a.price[field] > b.price[field])) {
      return 1;
    }
    return 0;
  })
}
const sortDis = (arr, field) => {
  return arr.sort(function (a, b) {
    if (a[field] > b[field]) {
      return -1;
    }
    if (b[field] > a[field]) {
      return 1;
    }
    return 0;
  })
}


const getFilterData = (data, value, filter) => {
  const result = data.filter(item => item.price.actual <= value);
  return result;
}

export default productReducer;

