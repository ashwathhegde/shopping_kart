import { REMOVE_FROM_CART, UPDATE_CART_QUANTITY, ADD_TO_CART } from "../actions/cartActions";

const initialState = {
    cart: []
};

const cartReducer = (state = initialState, action) => {
    let cart = state.cart;

    switch (action.type) {

        case ADD_TO_CART:

            cart.push(action.payload);

            return {
                ...state,
                cart: cart,
                isAdded: true
            };
        case UPDATE_CART_QUANTITY:
            let item = cart.find(item => item.product.productId == action.payload.productId);
            let newCart = []
            let keyValue;
            item.quantity = action.payload.quantity;
            cart.map ((item, key) =>{
                if(item.product.productId  === action.payload.productId) {
                     keyValue = key
                }
                
            })
            newCart = cart.slice(0)
            newCart[keyValue] = item
           
            return {
                ...state,
                cart: newCart
            };

        case REMOVE_FROM_CART:
            return {
                ...state,
                cart: cart.filter(item => item.product.productId != action.payload.productId),
                isAdded: false
            };
        default:
            return state;
    }
};

export default cartReducer;