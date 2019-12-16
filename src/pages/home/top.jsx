import React, { Component } from 'react';
import { connect } from 'react-redux'
import {Icon} from 'antd-mobile'
import {Top} from './home'

function mapStateToProps(state){
    return {
        data:state.toJS().Home.data,
        onoff:state.toJS().Search.onoff
    }
}
const mapDispatchProps=(dispatch)=>{
    return {
        getlist(){dispatch({
            type:"getlist",
            url:"/api/services/app/page/GetLgPageList",
            headers:{
                client_id:'logitech'
            }
        })},
        getonoff(){dispatch({
            type:"on0ff",
            data:9999
        })}
    }
}
class top extends Component {
    constructor(){
        super()
        this.state={}
    }
    componentDidMount(){
        this.props.getlist()
    }
    click(){
        this.props.getonoff()
    }
    render() {
        // console.log(this.props.data)
        return (
            <Top className="search1">
                <div onClick={this.click} key="search-cont" className="search-cont">
                    <Icon type="search" size='xxs' />
                    搜索商品
                </div>
            </Top>
        );
    }
}

export default connect(mapStateToProps,mapDispatchProps)(top);