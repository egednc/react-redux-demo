import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { buyCake } from '../redux'


// useSelector redux hook equvalent for mapStateToProps
//redux store daki datayi extract etmemizi sagliar => useSelector


function HooksCakeContainer() {
    
    const numOfCakes = useSelector(state => state.cake.numOfCakes)
    const dispatch = useDispatch() 

    return (
    <div>
        <h2>Num of cakes - {numOfCakes} </h2>
        <button onClick={ () => dispatch(buyCake())}> Buy Cake with hooks</button>
    
    </div>
  )
}

export default HooksCakeContainer