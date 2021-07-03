import { combineReducers,applyMiddleware,createStore } from "redux";
import { cityListReducer,distListReducer,squareListReducer } from "./reducer/cityReducer";
import thunk from "redux-thunk";

const initialstate = {};


const reducer=combineReducers({
    cityListReducer,
    distListReducer,
    squareListReducer,
    
})


const store=createStore(
    reducer,initialstate,applyMiddleware(thunk)
)

export default store;