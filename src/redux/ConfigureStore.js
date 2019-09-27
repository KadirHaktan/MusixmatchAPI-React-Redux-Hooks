
import {createStore,applyMiddleware} from 'redux'
import thunk from "redux-thunk"
import combineReducer from './reducers/combineReducer'

export default function ConfigureStore(){
    return createStore(combineReducer,applyMiddleware(thunk))
}