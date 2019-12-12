const defaultstate = {
    id:null
}

export const hreducer = (state=defaultstate,action)=>{
    switch(action.type){
        case 'putid':
        return {
            id:action.id
        }
        default:
        return state
    }
}