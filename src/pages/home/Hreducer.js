import { Map } from 'immutable'
const defaultState=Map({
    data:'',
    imglist:['','',''],
    lunbo:[],
    swiper:[],
    scroll:123,
    src:'',
})
export const Hreducers = (state=defaultState,action)=>{
    switch(action.type){
        case 'loadlist':
        return state.merge({
            data : action.data,
            imglist :  action.imglist,
            lunbo:action.lunbo,
            swiper:action.swiper,
        })
        case 'scroll':
        return state.set('scroll',action.scroll)
        case 'src':
        return state.set('src',action.src)
        default:
            return state
    }
}