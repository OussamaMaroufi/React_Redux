import counterReducer from "./counter";
import loggedReducer from "./isLogged";

import { combineReducers } from "redux";

const allReducers=  combineReducers({
    counter:counterReducer,
    isLogged:loggedReducer
    
});

export default allReducers;


// name of reducer is name of state