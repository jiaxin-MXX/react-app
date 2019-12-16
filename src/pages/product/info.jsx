import React, { Component } from 'react';
import { InfoWrap, Price } from './product.js'
import { connect } from 'react-redux'
function mapStateToProps(state) {
        return {
                data: state.toJS().Prodcut.data,
                ExtendList: state.toJS().Prodcut.ExtendList
        }
}
@connect(mapStateToProps)
class info extends Component {
        componentDidMount() {
        }
        render() {
                let ExtendList = this.props.ExtendList
                let data = this.props.data
                return (
                        data && <InfoWrap className="product-info bottom">
                                <Price width='0 0 1px 0'>
                                        <div className="product-price border-px">
                                                <p className="price"><label className="yuan">¥</label>{data.price+'.00'}
                
                                </p>
                                        </div>
                                </Price>
                                <div className="product-name">
                                        {data.alias}
                </div>
                        {(ExtendList && ExtendList.length)?<ul className="product-introduce ">
                                        {
                                                ExtendList.map((value) => {
                                                        return (
                                                                <li key={value.id} className="item border-right-px">
                                                                        <div className="item-img"><img
                                                                                src={value.imgUrl}
                                                                                alt="" className="responImg" /></div>
                                                                        <p className="title">{value.title}</p>
                                                                        <p className="text">{value.shortDesc}</p>
                                                                </li>
                                                        )
                                                })
                                        }
                                </ul> :''
                        } 
                        </InfoWrap>
                );
        }
}

export default info;