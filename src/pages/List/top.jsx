import React, { Component } from 'react';
import { connect } from 'react-redux'
import { TopWrap } from './list.js'
import { withRouter } from 'react-router-dom'
function mapstatetoprops(state){
    return {
        searchlist:state.toJS().Find.data
    }
}
function mapdispatchoprops(dispatch){
    return {
        getlist(keywords){dispatch({
            type:"searchfind",
            url:"/api/services/app/product/GetLgProductWapPage",
            headers:{
                client_id:'logitech'
            },
            data:{
                MaxResultCount: 10,
                SkipCount: 0,
                sorting: "CreationTime DESC",
                keywords,
                ISPhonePrice: 0
            }
        })},
    }
}
    
@withRouter
@connect(mapstatetoprops,mapdispatchoprops)
class top extends Component {
    componentDidMount(){
        this.props.getlist(this.props.location.state.value)
    }
    render() {
        return (
            <TopWrap width='0 0 1px 0' color='red' className="tab-nav ">
                <div className="item">
                    <p className="text active">综合</p>
                </div>
                <div className="item">
                    <p className="text">价格</p> <span className="arrowBox"><i
                        data-sort="1" className="arrow-01"></i> <i
                            className="arrow-02"></i></span>
                </div>
                <div className="item">
                    <p className="text">
                        手机专享
                </p> <img
                        src=""
                        alt="" />
                </div>
            </TopWrap>
        );
    }
}

export default top;