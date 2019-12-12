import React, { Component } from 'react';
import { ShowWrap} from './home'
import { postData } from 'utils/http'
import { connect } from 'react-redux'

function mapstatetoprops(state){
    return {
        scroll:state.Home.scroll,
        src:state.Home.src
    }
}

@connect(mapstatetoprops)
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
            params:{
                Skip,
                Count,
            }
        })
        return result
    }
    handleclick=(value)=>{
        return ()=>{
            console.log(value)
        }
    }
    click=(id)=>{
        return ()=>{
            console.log(id)
        }
    }
    videoSrc=(src)=>{
        return ()=>{
            this.props.dispatch({
                type:'src',
                src,
            })
        }
    }
    async componentDidMount(){
        let Skip = 0
        let result = await this.getlist({
            Skip,
            Count:10,
        })
        Skip++
        this.setState({
            showlist:result
        })
        let scroll=this.props.scroll
        scroll.on('pullingUp',async ()=>{
            result = await this.getlist({
                Skip,
                Count:10,
            }) 
            this.setState({
                showlist:[
                    ...this.state.showlist,
                    ...result
                ]
            })
            Skip++
            scroll.finishPullUp()
            setTimeout(() => {
                scroll.refresh()
            }, 0);
        })
    }
    render() {
        return (
            <>
            <ShowWrap id="recom" className="home-recom">
               {
                   this.state.showlist.map((value)=>{
                        return ( <li key={value.id} className="item">
                        <div className="item-product">
                            <div onClick={this.click(value.id)} className="Adiv">
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
                            </div>
                        </div>
                        <div className="item-other">
                            <div className="other-left">
                                {
                                    value.productKey.map((temp,index)=>{
                                        return (<p onClick={this.handleclick(temp)} key={index} className="type">
                                                {temp}
                                            </p>)
                                    })
                                }
                            </div>
                            {
                                value.video && <div onClick={this.videoSrc(value.video)} className="other-right">
                                视频</div>
                            }
                        </div>
                    </li>)
                   })
               }
            </ShowWrap>
            </>
        );
    }
}

export default showlist;