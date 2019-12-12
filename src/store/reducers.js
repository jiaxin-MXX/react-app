import { combineReducers } from 'redux'
import { Hreducers as list } from '../pages/home/Hreducer'
import { hreducer as classfiy } from '../pages/classfiy/hreducer'
const chatReducer = combineReducers({
    Home:list,
    Fenlei:classfiy
})
export default chatReducer