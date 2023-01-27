import React,{useState} from "react";
import { connect }  from 'react-redux'
import { buyCoffe } from "../redux";

function CoffeContainer(props)  {
    const [number, setNumber] = useState(1)
    return (
        <div>
            <h1>num of coffes - {props.numOfCoffe}  </h1>
            <input type='text'  onChange={e => setNumber( e.target.value)}></input>
            <button onClick={ () => props.buyCoffe(number)}>buy coffe </button>
        </div>
    )
    }

const mapStateToProps =(state) => { 
    return {
        numOfCoffe : state.coffe.numOfCoffe
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        buyCoffe : (number) => dispatch(buyCoffe(number))
    }
}



export default connect(mapStateToProps , mapDispatchToProps) (CoffeContainer)