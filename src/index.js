import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore,combineReducers} from 'redux';
import { Provider } from 'react-redux';
// provider connect ou global store  with the entire app

import allReducer from './reducers'


const store = createStore(
  allReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()

  
  );

// import {createStore} from 'redux'

// // let store = createStore(reducer  )

// //Store -> is glbal state
// //Action ->describe  what you wanna do  eg :increment action :simple fct  that return an object$

// const increment = ()=>{
//   return {
//     type:'INCREMENT'
//   }
// }
// const decrement = ()=>{
//   return {
//     type:'DECREMENT'
//   }
// }
// //Reducer ->describe How your   action transform your state to the next state 
//          //based on the action it modifie the store
// //crete a reducer that take care of all actions

// //Rducer
// const counter = (state =0,action)=>{
//   switch(action.type){
//     case "INCREMENT":
//       return state + 1 ;
//     case "DECREMENT":
//       return state - 1;
//   }
// }

// //create store
// let store = createStore(counter);

// //display it in the consol
// store.subscribe(()=>console.log(store.getState()));

// //dispatch
// store.dispatch(increment());


//Dispatch ->dispatch action to the reducer
            //send action to the reducer ;the reducer check what to do and then the store gets updated

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
         <App />
    </Provider>

  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
