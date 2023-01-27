import { combineReducers } from "redux";
import cakeReducer  from "./cake/cakeReducer";
import coffeReducer from "./coffe/coffeReducer";
import iceCreamReducer from "./iceCream/iceCreamReducer";
import userReducer from "./user/userReducer";

const rootReducer = combineReducers({
    cake : cakeReducer ,
    iceCream : iceCreamReducer,
    coffe : coffeReducer ,
    user : userReducer
})
export default rootReducer
