import { combineReducers } from 'redux'
import { Hreducers as list } from '../pages/home/Hreducer'
const chatReducer = combineReducers({
    Home:list
})
export default chatReducer