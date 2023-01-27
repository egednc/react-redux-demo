import { BUY_COFFE } from "./coffeType"

const initialState = {
    numOfCoffe : 30
}

const coffeReducer = (state=initialState, action) => {

    switch(action.type) {
        case BUY_COFFE : return{
            ...state ,
            numOfCoffe : state.numOfCoffe - action.payload
        }
        default : return state
    }
}

export default coffeReducer 