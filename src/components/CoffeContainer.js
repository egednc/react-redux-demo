import React from "react";
import { connect }  from 'react-redux'
import { buyCoffe } from "../redux";

function CoffeContainer(props)  {
    return (
        <div>
            <h1>num of coffes - {props.numOfCoffe}  </h1>
            <button onClick={props.buyCoffe}>buy coffe </button>
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
        buyCoffe : () => dispatch(buyCoffe())
    }
}



export default connect(mapStateToProps , mapDispatchToProps) (CoffeContainer)