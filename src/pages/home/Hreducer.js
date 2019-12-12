const defaultState={
    data:'',
    imglist:['','',''],
    lunbo:[],
    swiper:[],
    scroll:123,
    src:'',
}
export const Hreducers = (state=defaultState,action)=>{
    switch(action.type){
        case 'loadlist':
        return {
            data : action.data,
            imglist :  action.imglist,
            lunbo:action.lunbo,
            swiper:action.swiper,
            scroll:state.scroll,
            src:state.src,
        }
        case 'scroll':
        return {
            data:state.data,
            imglist:state.imglist,
            lunbo:state.lunbo,
            swiper:state.swiper,
            scroll:action.scroll,
            src:state.src,
        }
        case 'src':
        return {
            data:state.data,
            imglist:state.imglist,
            lunbo:state.lunbo,
            swiper:state.swiper,
            scroll:state.scroll,
            src:action.src,
        }
        default:
            return state
    }
}