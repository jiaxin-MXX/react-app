import React, { Component } from 'react';
import { Slidewrap } from './home'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import Swiper from 'swiper'
function mapstatetoProps(state) {
    return {
        data: state.toJS().Home.swiper
    }
}
@withRouter
class slide extends Component {
    state={
        swiper:['swiper1','swiper2']
    }
    componentDidMount() {
        // setTimeout(() => {
        //     for (var i = 0; i <= 1; i++) {
        //         new Swiper(`#swiper${i} .swiper-container`, {
        //             slidesPerView: 2,//一行显示2个
        //             slidesPerColumn: 2,//显示2行
        //             spaceBetween: 15,
        //             pagination: {
        //                 el: '.swiper-pagination',
        //                 bulletActiveClass: 'my-bullet-active',
        //             },
        //         })
                
        //     }
        // }, 0)
    }
    click=(id)=>{
        return ()=>{
            
            this.props.history.push({
                pathname:'/product',
                state:{
                    id
                }
            })
        }
    }
    componentWillUnmount(){
        this.state.swiper[0].destroy()
        this.state.swiper[1].destroy()
    }
    render() {
        if (this.props.data) {
            
            setTimeout(() => {
                for (var i = 1; i >= 0; i--) {
                    this.state.swiper[i]= new Swiper(`#swiper${i} .swiper-container`, {
                        slidesPerView: 2,//一行显示2个
                        slidesPerColumn: 2,//显示2行
                        spaceBetween: 15,
                        pagination: {
                            el: '.swiper-pagination',
                            bulletActiveClass: 'my-bullet-active',
                        },
                    })
                    
                }
            }, 0)
        }
        return (
            this.props.data.map((value, index) => {
                return (
                    <Slidewrap id={'swiper' + index} key={value.id} className="home-category">
                        <a href="/home" className="category">
                            {value.name}
                            <i className="iconfont">></i>
                        </a>
                        <div className="swiper-container product-box">
                            <div className="swiper-wrapper">
                                {
                                    value.pageChildElementItem && value.pageChildElementItem.map((value) => {
                                        return (
                                            <div key={value.product.id} className="swiper-slide item swiper-slide-prev">
                                                <div onClick={this.click(value.product.id)}>
                                                    <div className="item-img"><img alt="" className="responImg"
                                                        src={value.product.picUrl}
                                                        lazy="loaded" /></div>
                                                    <div className="item-info">
                                                        <h3 className="title">{value.product.alias}</h3>
                                                        <p className="intro">{value.name}</p>
                                                        <p className="price"><span className="price-sale">￥{value.product.price}</span>
                                                            {value.product.originPrice!==value.product.price ? <span className="price-original">￥{value.product.originPrice}</span> : ''}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div className="swiper-pagination"></div>
                        </div>
                    </Slidewrap>
                )
            })
        );
    }
}

export default connect(mapstatetoProps)(slide);