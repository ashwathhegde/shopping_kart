import { applyMiddleware, compose, createStore } from "redux";
import logger from "redux-logger";
import { rootReducer } from "./store/reducers/rootReducer";


const middlewares = [];

export  const store = () => {
    createStore(
        rootReducer,
        applyMiddleware(logger),
    );
}
 

export default store;