
import React from 'react';
// react redux
import {Provider} from 'react-redux'
import store from './redux/store'
import './App.css';
import CakeContainer from './components/CakeContainer';
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import CoffeContainer from './components/CoffeContainer';

function App() {
  // provider wrap all component
  return (
    <Provider store={store}> 
    <div className=" container App">
      <CakeContainer /> 
      <HooksCakeContainer />
      <IceCreamContainer />
      <CoffeContainer/>
      
    </div>
    </Provider>
  );
}

export default App;
