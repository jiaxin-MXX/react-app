import React, { Component } from 'react';
import { Combo } from './product.js'

import Swiper from 'swiper'
import { postData } from 'utils/http'
import { withRouter } from 'react-router-dom'

@withRouter
class combo extends Component {
    state = {
        list: null
    }
    getdata1=async(ProductId)=>{
        let result = await postData({
            url: 'api/services/app/umpPackage/GetUmpPackageList',
            headers: {
                client_id: 'logitech'
            },
            params: {
                ProductId
            }
        })
        return result
    }
    getdata2=async(Type)=>{
        let result = await postData({
            url: 'api/services/app/umpPackage/RecommendPackage',
            headers: {
                client_id: 'logitech'
            },
            params: {
                Type
            }
        })
        return result
    }
    async componentDidMount() {
        let result
        if(this.props.location.state.Type){
            result = await this.getdata2(this.props.location.state.Type)
        }else{
            result = await this.getdata1(this.props.location.state.id)
        }
        
        console.log(result)
        this.setState({
            list: result
        })
        setTimeout(() => {
            new Swiper('#swiper2', {
                on:{
                    transitionStart: function(swiper){
                        console.log(this.width)
                        this.update()
                        let index = this.activeIndex
                        this.setTranslate(-1*index*(this.width*0.925));
                        if(index === 2){
                            this.setTranslate(-1*index*(this.width*0.9));
                        }
                    }
                },
                pagination: {
                    el: '.swiper-pagination',
                },
            })
        }, 0)
    }
    render() {
        return (
            this.state.list&&this.state.list.length ? <Combo className="product-combo bottom">
            <h3 className="recommend">推荐套餐</h3>
            <div id='swiper2' className="swiper-container combo swiper-container-horizontal swiper-container-ios">
                <div className="swiper-wrapper">
                    {
                        this.state.list.map((value, index) => {
                            return (
                                <div key={index} className="swiper-slide" style={{ marginRight: '16px' }}>
                                    <div className="slide-top">
                                        <div className="head">
                                            <p className="name">{value.title}</p>
                                            <p className="price"><label data-v-235aa6ba=""
                                                className="yuan">¥&nbsp;</label>{value.packagePrice}</p>
                                            <p className="price-original"><label data-v-235aa6ba=""
                                                className="yuan">¥</label>{value.originalprice}</p>
                                            <p className="save">立省￥{value.originalprice - value.packagePrice}</p>
                                        </div>
                                        <div className="btn">
                                            <p className="btn-red">立即购买</p>
                                        </div>
                                    </div>
                                    <div className="slide-main">
                                        {
                                            value.umpPackageProducDtoSetList.map((item) => {
                                                return (
                                                    <div key={item.producId} className="item"><div data-v-235aa6ba=""
                                                        className="router-link-exact-active router-link-active a">
                                                        <div className="item-img"><img data-v-235aa6ba=""
                                                            src={item.imgUrl}
                                                            alt="" className="responImg" /></div>
                                                        <div className="item-content">
                                                            <p className="name">{item.product.shortTitle}</p>
                                                            <p className="price-1"><span
                                                                data-v-235aa6ba=""
                                                                className="price">¥{item.product.price}</span></p>
                                                        </div>
                                                    </div></div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                                    )
                                })
                            }
                
                </div>
                <div className="swiper-pagination"></div>
            </div>
        </Combo> : ''
        );
    }
}

export default combo;