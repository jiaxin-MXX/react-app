import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Top } from './product'
function mapStateToProps(state){
    return {
        data:state.toJS().Prodcut.data
    }
}
const mapDispatchProps=(dispatch)=>{
    return {
        getdata(id){dispatch({
            type:"getdata",
            url:"/api/services/app/product/GetLgProduct",
            headers:{
                client_id:'logitech'
            },
            params: {
                id
            }
        })},
        getExtend(id){dispatch({
            type:"Extend",
            url:"/api/services/app//productPromotionExtend/ProductPromotionExtendList",
            headers:{
                client_id:'logitech'
            },
            params: {
                ProductId:id
            }
        })}
    }
}
@withRouter
@connect(mapStateToProps,mapDispatchProps)
class top extends Component {
    componentDidMount(){
        this.props.getdata(this.props.location.state.id)
        this.props.getExtend(this.props.location.state.id)
    }
    back = () => {
        this.props.history.goBack()
    }
    render() {
        return (
            <Top className="head-box">
                    <header className="mint-header is-fixed">
                        <span onClick={this.back}>{'<'}</span>
                        <div className="mint-header-title">商品详情</div>
                    </header>
            </Top>
        );
    }
}

export default top;