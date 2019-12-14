const defaultstate = {
    data:null,
    ExtendList:null
}

export const hreducer = (state=defaultstate,action)=>{
    switch(action.type){
        case 'getproduct':
        return {
            ...state,
            data:action.data
        }
        case'ExtendList' :
        return {
            ...state,
            ExtendList:action.data
        }
        default:
        return state
    }
}