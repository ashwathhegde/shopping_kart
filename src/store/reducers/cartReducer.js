import { REMOVE_FROM_CART, UPDATE_CART_QUANTITY, ADD_TO_CART } from "../actions/cartActions";

const initialState = {
    cart: []
};

const cartReducer = (state = initialState, action) => {
    let cart = state.cart;

    switch (action.type) {

        case ADD_TO_CART:
            let checkProduct = cart.filter(item => item.product.productId === action.payload.product.productId);
           if(checkProduct.length){
               return (updateCart(cart, state, action))
           } else {
                cart.push(action.payload);
                return {
                    ...state,
                    cart: cart,
                    isAdded: true
                };
           }
            
        case UPDATE_CART_QUANTITY:
            return (updateCart(cart, state, action))
           
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

const updateCart = (cart, state, action) => {
            let item = cart.find(item => item.product.productId === (action.payload.productId ? action.payload.productId : action.payload.product.productId));
            let newCart = [];
            let keyValue;
            cart.map ((item, key) =>{
                if(item.product.productId  === (action.payload.productId ? action.payload.productId : action.payload.product.productId)) {
                     keyValue = key
                }
                
            })
            switch(action.payload && action.payload.value){
                case "ADD":
                    item.quantity = item.quantity + action.payload.quantity;
                    break;
                case "INC":
                     item.quantity =  action.payload.quantity;
                      break;
                  default:
                        item.quantity =  action.payload.quantity;
                

            }
            newCart = cart.slice(0)
            newCart[keyValue] = item
           
            return {
                ...state,
                cart: newCart
            };
}
export default cartReducer;