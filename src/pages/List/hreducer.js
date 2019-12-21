import { Map } from 'immutable'
const defaultState=Map({
    data:'',
})
export const Hreducers = (state=defaultState,action)=>{
    switch(action.type){
        case 'searchlist':
        return state.set('data',action.data)
        default:
            return state
    }
}