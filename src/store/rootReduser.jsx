import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import authReducer from "./reducers/authReducer";
import eventsReducer from "./reducers/eventReducer";


const rootReducer = combineReducers({
    authReducer,
    eventsReducer

})

export const store = createStore(rootReducer, applyMiddleware(thunk))






