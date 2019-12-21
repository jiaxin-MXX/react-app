import { combineReducers } from 'redux-immutable'
import { Hreducers as list } from '../pages/home/Hreducer'
import { hreducer as classfiy } from '../pages/classfiy/hreducer'
import { hreducer as data } from '../pages/product/hreducer'
import { hreducer as Search } from '../pages/search/hreducer'
import { Hreducers as searchlist } from '../pages/List/hreducer'

const chatReducer = combineReducers({
    Home:list,
    Fenlei:classfiy,
    Prodcut:data,
    Search:Search,
    Find:searchlist
})
export default chatReducer