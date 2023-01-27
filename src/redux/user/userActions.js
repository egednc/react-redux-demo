import axios from 'axios'
import { FETCH_USERS_REQUEST, FETCH_USERS_REQUEST_SUCCES , FETCH_USERS_REQUEST_FAILURE } from './userTypes'

// action object creater function
export const fetchUsersRequest=()=> {
//action object
  return {
    type : FETCH_USERS_REQUEST,
  }
}

 const fetchUsersSucces = (users) =>{
    return {
        type : FETCH_USERS_REQUEST_SUCCES,
        payload : users
    }

}

 const fetchUsersFailure = (error) =>{
    return{
        type :FETCH_USERS_REQUEST_FAILURE ,
        payload  : error
    }
}
 ////////AXIOS REQUEST ////////
/// async actions,  allow to have side effect asyn api call
 export const fetchUsers = () => {
    return (dispatch) => {
        dispatch(fetchUsersRequest)// loading to true
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then (res => {
          const  users = res.data
          dispatch(fetchUsersSucces(users))
        })
        .catch (error => {
            const errorMsg = error.message
            dispatch(fetchUsersFailure(errorMsg))
        })
    }
 }
