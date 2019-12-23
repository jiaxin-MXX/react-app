import React, { Component } from 'react';
import { Center } from './list'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
function mapstatetoprops(state) {
    return {
        searchlist: state.toJS().Find.data
    }
}
const mapDispatchProps=(dispatch)=>{
    return {
        getonoff(){dispatch({
            type:"display",
            onoff:-1
        })}
    }
}
@withRouter
@connect(mapstatetoprops,mapDispatchProps)
class center extends Component {
    click=(id,shortTitle)=>{
        return ()=>{
            
            this.props.history.push({
                pathname:'/product',
                state:{
                    id,
                    shortTitle
                }
            })
        }
    }
    render() {
        this.props.getonoff()
        return (
            <Center className="product-tab">
                <div className="product-box page-loadmore-list">
                    {
                        this.props.searchlist ? this.props.searchlist.map((value) => {
                            return (
                                <div key={value.id} onClick={this.click(value.id,value.shortTitle)} className="item"><div className="a">
                                    <div className="item-img"><img
                                        src={value.picUrl}
                                        alt="" className="responImg" /></div>
                                    <div className="item-info">
                                        <h3 className="title">{value.title}</h3>
                                        <p className="intro">{value.shortDesc.includes('<p>')?value.keyWord:value.shortDesc}</p>
                                        <p className="price"><span
                                            className="price-sale">￥{value.price}{value.point?'+积分'+value.point:''}</span> <span
                                                className="price-original">￥{value.originPrice}</span></p>
                                    </div>
                                </div></div>
                            )
                        }) :''
                    }
                </div>
            </Center>
        );
    }
}

export default center;