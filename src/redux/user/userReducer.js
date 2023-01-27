import { FETCH_USERS_REQUEST, FETCH_USERS_REQUEST_SUCCES , FETCH_USERS_REQUEST_FAILURE } from './userTypes'

 const initialState = {
    loading : false ,
    users : [],
    error : ''
}

 const userReducer =  (state=initialState, action) => {
    switch(action.type){
        case FETCH_USERS_REQUEST : return {
            ...state ,
            loading : true
                }

        case FETCH_USERS_REQUEST_SUCCES : return {
            loading : false ,
            users : action.payload,
            error : ''
        }   
        case FETCH_USERS_REQUEST_FAILURE : return {
            loading : false ,
            users : [],
            error : action.payload
        }   
        default : return state
} 
  
}

export default userReducer