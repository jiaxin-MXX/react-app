import { Map } from 'immutable'
defaultstate=Map({
    onoff:-1
})
export const hreducer = (state=defaultstate,action)=>{
    switch(action.type){
        case 'onoff':
        return state.set('data',action.data)
       
        default:
        return state
    }
}