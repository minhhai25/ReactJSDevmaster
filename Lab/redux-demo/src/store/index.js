import {createStore} from 'redux'
import  rootReducer from '../reducers'
// tạo store từ reducer
export const store = createStore(rootReducer);