import { Map } from 'immutable'
const defaultstate=Map({
    onoff:-1,
    search:null,
    his:null,
    ok:null,
})
export const hreducer = (state=defaultstate,action)=>{
    switch(action.type){
        case 'onoff':
        return state.set('onoff',action.onoff)
        case 'search':
        return state.set('search',action.search)
        case 'his':
        return state.set('his',action.his)
        case 'ok':
        return state.set('ok',action.ok)
        default:
        return state
    }
}