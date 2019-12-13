const defaultstate = {
    data:null
}

export const hreducer = (state=defaultstate,action)=>{
    switch(action.type){
        case 'getproduct':
        return {
            data:action.data
        }
        default:
        return state
    }
}