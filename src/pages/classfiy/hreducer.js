import {Map} from 'immutable'
const defaultstate = Map({
    id:null
})

export const hreducer = (state=defaultstate,action)=>{
    switch(action.type){
        case 'putid':
        return state.set('id',action.id)
        default:
        return state
    }
}