import { createStore, applyMiddleware } from "redux"; // es6 import syntax
import logger from 'redux-logger'
import rootReducer from "./rootReducer";
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';



// logger middleware helps the  see the actions, prevsState =>action =>nexState

// rootReducer da combinleadimiz reducerlari store in icine koyuyoruz 


const store = createStore(rootReducer ,
    composeWithDevTools(applyMiddleware(logger,thunk)))

export default store