import { combineReducers } from "redux";
import cakeReducer  from "./cake/cakeReducer";
import coffeReducer from "./coffe/coffeReducer";
import iceCreamReducer from "./iceCream/iceCreamReducer";

const rootReducer = combineReducers({
    cake : cakeReducer ,
    iceCream : iceCreamReducer,
    coffe : coffeReducer
})
export default rootReducer
