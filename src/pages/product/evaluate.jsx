import React, { Component } from 'react';
import { Eval } from './product.js'
import BScroll from 'better-scroll'
import { connect } from 'react-redux'
function mapStateToProps(state) {
    return {
        data: state.toJS().Prodcut.data
    }
}
@connect(mapStateToProps)
class evaluate extends Component {
    componentDidMount() {
        setTimeout(() => {
            new BScroll('.scrollWrap', {
                click: true,
                scrollX: true,
                eventPassthrough: 'vertical',
            })
        })
    }
    render() {
        return (
            <Eval className="product-evaluation bottom">
                <div className="line-content">
                    <div className="line-box">
                        <div className="content-left">
                            <p className="text">商品评价</p>
                        </div>
                        <div className="content-right">
                            <p className="text">{this.props.data && this.props.data.productEvaluateCount}</p> <i className="iconfont">></i>
                        </div>
                    </div>
                </div>
                <div className='scrollWrap'>
                    <ul className="evaluation" style={{padding:this.props.data&&this.props.data.productEvaluateCount.length?'.085335rem 0':'0'}}>
                        {
                            this.props.data && this.props.data.productEvaluateList.map((value) => {
                                return (
                                    <li key={value.buyerId} className="item"><div
                                        className="item-img">
                                            <div dangerouslySetInnerHTML = {{ __html:value.showImagers }}></div>
                                        </div>
                                        <p className="count"><b className="weight">{value.imgCount}</b>张</p>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </Eval>
        );
    }
}

export default evaluate;