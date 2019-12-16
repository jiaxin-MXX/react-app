import { Map } from 'immutable'
const defaultstate = Map({
    data:null,
    ExtendList:null
})

export const hreducer = (state=defaultstate,action)=>{
    switch(action.type){
        case 'getproduct':
        return state.set('data',action.data)
        case'ExtendList' :
        return state.set('ExtendList',action.data)
        default:
        return state
    }
}