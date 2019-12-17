import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Top} from './search.js'
import {Icon} from 'antd-mobile'
import {postData} from 'utils/http'
import _ from 'lodash'
function mapstatetoprops(state){
    return {
        onoff:state.toJS().Search.onoff,
        search:state.toJS().Search.search,
        ok:state.toJS().Search.ok,
    }
}
@connect(mapstatetoprops)
class top extends Component {
    constructor(){
        super()
        this.search = _.debounce(this.search, 300);
    }
    async getsearch(){
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
    async componentDidMount(){
        let result=await this.getsearch()
        this.props.dispatch({
            type:"search",
            search:result
        })
    }
    click=()=>{
        this.props.dispatch({
            type:"display",
            onoff:-1
        })
    }
    search=(e)=>{
        let flag=0
        if(e.target.value){
            let a=this.props.search.filter((value)=>{
                if(flag<10){
                    if(value.includes(e.target.value)){
                        flag+=1
                        return value
                    }
                }
            })
            this.props.dispatch({
                type:'ok',
                ok:a
            })
        }else{
            this.props.dispatch({
                type:'ok',
                ok:null
            })
        }
    }
    keyup=(e)=>{
        e.persist();
        this.search(e)
        
    }
    render() {
        return (
            <Top width='0 0 1px 0' className="search border-px">
                <div className="mint-cell mint-field is-nolabel">
                    <Icon type="search" size='xxs' />
                    <input onKeyUp={this.keyup}  placeholder="搜索商品" type="text" className="mint-field-core" />
                </div>
                <span onClick={this.click} className="cancel">取消</span>
            </Top>
        );
    }
}

export default top;