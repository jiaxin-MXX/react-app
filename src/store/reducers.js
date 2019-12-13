import { combineReducers } from 'redux'
import { Hreducers as list } from '../pages/home/Hreducer'
import { hreducer as classfiy } from '../pages/classfiy/hreducer'
import { hreducer as data } from '../pages/product/hreducer'
const chatReducer = combineReducers({
    Home:list,
    Fenlei:classfiy,
    Prodcut:data
})
export default chatReducer