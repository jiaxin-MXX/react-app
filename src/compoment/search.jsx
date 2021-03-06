import React, { Component } from 'react';
import { connect } from 'react-redux'
import {Icon} from 'antd-mobile'
import {Top} from './search'
import { withRouter} from 'react-router-dom'
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
@withRouter
class top extends Component {
    constructor(){
        super()
        this.state={}
    }
    componentDidMount(){
        
    }
    click(){
        this.props.history.goBack()
    }
    render() {
        
        return (
            <Top
            width="0 0 1px 0"
            color='red'
            className="search1" styled={{padding:this.props.location.pathname === '/list'?'.064rem .081065rem':'.064rem .260265rem'}}>
                {
                    this.props.location.pathname === '/list' ? <Icon onClick={this.click} type="left" color='#666666' /> : ''
                }
                <a href='home' key="search-cont" className="search-cont">
                    <Icon type="search" size='xxs' />
                    搜索商品
                </a>
            </Top>
        );
    }
}

export default connect(mapStateToProps,mapDispatchProps)(top);