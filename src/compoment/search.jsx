import React, { Component } from 'react';
import { connect } from 'react-redux'
import {Icon} from 'antd-mobile'
import {Top} from './search'

function mapStateToProps(state){
    return {
        data:state.toJS().Home.data
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
        })}
    }
}
class top extends Component {
    constructor(){
        super()
        this.state={}
    }
    componentDidMount(){
        
    }

    render() {
        // console.log(this.props.data)
        return (
            <Top
            width="0 0 1px 0"
            color='red'
            className="search1">
                <a href='home' key="search-cont" className="search-cont">
                    <Icon type="search" size='xxs' />
                    搜索商品
                </a>
            </Top>
        );
    }
}

export default connect(mapStateToProps,mapDispatchProps)(top);