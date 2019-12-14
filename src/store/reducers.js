import { combineReducers } from 'redux'
import { Hreducers as list } from '../pages/home/Hreducer'
import { hreducer as classfiy } from '../pages/classfiy/hreducer'
import { hreducer as data } from '../pages/product/hreducer'
import { hreducer as Search } from '../pages/search/hreducer'
const chatReducer = combineReducers({
    Home:list,
    Fenlei:classfiy,
    Prodcut:data,
    Search:Search
})
export default chatReducer