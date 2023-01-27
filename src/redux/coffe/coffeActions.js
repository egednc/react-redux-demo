import { BUY_COFFE } from "./coffeType";

//ACTION CREATER FUNCTION THAT CREATE  PLAIN ACTION OBJECT
export const buyCoffe = (number ) =>{
    return { 
        type : BUY_COFFE ,
        payload: number
    }
}