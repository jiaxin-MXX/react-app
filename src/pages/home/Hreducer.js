const defaultState={
    data:'',
    imglist:['','',''],
    lunbo:[],
    swiper:[],
}
export const Hreducers = (state=defaultState,action)=>{

    switch(action.type){
        case 'loadlist':
        return {
            data : action.data,
            imglist :  action.imglist,
            lunbo:action.lunbo,
            swiper:action.swiper,
        }
        default:
            return state
    }
}