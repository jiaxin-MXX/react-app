import React, { Component } from 'react';
import { connect } from 'react-redux'
import {Icon} from 'antd-mobile'
import {Top} from './home'

function mapStateToProps(state){
    return {
        data:state.Home.data
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
        this.props.getlist()
    }

    render() {
        // console.log(this.props.data)
        return (
            <Top className="search1">
                <div key="search-cont" className="search-cont">
                    <Icon type="search" size='xxs' />
                    搜索商品
                </div>
            </Top>
        );
    }
}

export default connect(mapStateToProps,mapDispatchProps)(top);