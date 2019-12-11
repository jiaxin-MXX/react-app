import React, { Component } from 'react';
import { ShowWrap } from './home'
import { postData } from 'utils/http'
class showlist extends Component {
    constructor(){
        super()
        this.state={
            showlist:[]
        }
    }
    async getlist({Skip,Count}){
        let result = await postData({
            url:'api/services/app/product/GetBuyerCrmProductHisList',
            headers:{
                client_id:'logitech'
            },
            data:{
                Skip,
                Count,
            }
        })
        return result
    }
    async componentDidMount(){
        let result = await this.getlist({
            Skip:0,
            Count:10,
        }) 
        this.setState({
            showlist:result
        })
        console.log(this.state.showlist)
    }
    render() {
        return (
            <ShowWrap id="recom" className="home-recom">
               {
                   this.state.showlist.map((value)=>{
                        return ( <li key={value.id} className="item">
                        <div className="item-product">
                            <a href="/home" className="">
                                <div className="product-img">
                                    <img alt="" className="responImg" src={value.productImage} lazy="loaded" />
                                </div>
                                <div className="product-info">
                                    <h3 className="title">
                                        {value.productTitle}</h3>
                                    <p className="price">
                                        <span className="price-sale">￥{value.productPrice}</span>
                                    </p>
                                </div>
                            </a>
                        </div>
                        <div className="item-other">
                            <div className="other-left">
                                {
                                    value.productKey.map((temp,index)=>{
                                        return (<a href="" key={index} className="type">
                                                {temp}
                                            </a>)
                                    })
                                }
                            </div>
                            {
                                value.video && <div className="other-right">
                                视频</div>
                            }
                        </div>
                    </li>)
                   })
               }
            </ShowWrap>
        );
    }
}

export default showlist;