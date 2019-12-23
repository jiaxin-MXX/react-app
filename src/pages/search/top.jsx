import React, { useCallback,useEffect} from 'react';
import { connect } from 'react-redux';
import {Top} from './search.js'
import {Icon} from 'antd-mobile'
import { withRouter } from 'react-router-dom'
import {postData} from 'utils/http'
import _ from 'lodash'
function mapstatetoprops(state){
    return {
        onoff:state.toJS().Search.onoff,
        search:state.toJS().Search.search,
        his:state.toJS().Search.his,
        ok:state.toJS().Search.ok,
    }
}
// class top extends Component {
//     constructor(){
//         super()
//         this.search = _.debounce(this.search, 300);
//     }
    // async getsearch(){
    //     let result=await postData({
    //         type:"searchlist",
    //         url: '/api/services/app/product/GetBuyerSelectKey',
    //         headers:{
    //             client_id: 'logitech'
    //         },
    //         params:{
    //             Skip: 0,
    //             Count: 10000
    //         }
    //     })
    //     return result
    // }
    // async componentDidMount(){
        // let result=await this.getsearch()
        // this.props.dispatch({
        //     type:"search",
        //     search:result
        // })
    // }
//     click=()=>{
//         this.props.dispatch({
//             type:"display",
//             onoff:-1
//         })
//     }
    // search=(e)=>{
    //     let flag=0
    //     if(e.target.value){
    //         let a=this.props.search.filter((value)=>{
    //             if(flag<10){
    //                 if(value.includes(e.target.value)){
    //                     flag+=1
    //                     return value
    //                 }
    //             }
    //         })
    //         this.props.dispatch({
    //             type:'ok',
    //             ok:a
    //         })
    //     }else{
    //         this.props.dispatch({
    //             type:'ok',
    //             ok:null
    //         })
    //     }
    // }
//     keyup=(e)=>{
//         e.persist();
//         this.search(e)
        
//     }
//     render() {
//         return (
//             <Top width='0 0 1px 0' className="search border-px">
//                 <div className="mint-cell mint-field is-nolabel">
//                     <Icon type="search" size='xxs' />
//                     <input onKeyUp={this.keyup}  placeholder="搜索商品" type="text" className="mint-field-core" />
//                 </div>
//                 <span onClick={this.click} className="cancel">取消</span>
//             </Top>
//         );
//     }
// }
const TopSearch = (props)=>{

    async function getsearch(){
        let result=await postData({
            type:"searchlist",
            url: '/api/services/app/product/GetBuyerSelectKey',
            headers:{
                client_id: 'logitech'
            },
            params:{
                Skip: 0,
                Count: 10000
            }
        })
        return result
    }
    let search=_.debounce((e)=>{
        let flag=0
        if(e.target.value){
            let a=props.search.filter((value)=>{
                if(flag<10){
                    if(value.includes(e.target.value)){
                        flag+=1
                        return value
                    }
                }
            })
            props.dispatch({
                type:'ok',
                ok:a
            })
        }else{
            props.dispatch({
                type:'ok',
                ok:null
            })
        }
    },300)
    let juge=useCallback((value)=>{
        console.log(value)
        let flag=0
        props.his.map((val)=>{
            if(value===val){
                flag=1;
                return
            }
        })
        if(flag===0){
            if(props.his.length<10){
                props.dispatch({
                    type:'his',
                    his:[
                        ...props.his,
                        value
                    ]
                })
            }else{
                props.dispatch({
                    type:'his',
                    his:props.his.slice(1).push(value)
                })
            }
        }
        props.history.push({
            pathname:'/list',
            state:{
                value
            }
        })
    },[])
    let click=useCallback(()=>{
        props.dispatch({
                    type:"display",
                    onoff:-1
                })
                
            },[props])
    let keyup=useCallback((e)=>{
         e.persist()
        search(e) 
        if(e.keyCode===13){
            juge(e.target.value)
        }
        },[search])
    useEffect(()=>{
        async function getdata(){
            let result=await getsearch()
            props.dispatch({
                type:"search",
                search:result
            })
        }
        getdata()
    },[])
    return (
        <Top width='0 0 1px 0' className="search border-px">
            <div className="mint-cell mint-field is-nolabel">
                <Icon type="search" size='xxs' />
                <input onKeyUp={keyup}  placeholder="搜索商品" type="text" className="mint-field-core" />
            </div>
            <span onClick={click} className="cancel">取消</span>
        </Top>
    )

}


export default withRouter(connect(mapstatetoprops)(TopSearch));