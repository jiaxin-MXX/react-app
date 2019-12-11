import React, { Component} from 'react';
import {IngetralWrap} from './home'
import { connect } from 'react-redux'
import BScroll from 'better-scroll'
function mapStateToProps(state){
    return {
        data:state.Home.data,
        imglist:state.Home.imglist,
        lunbo:state.Home.lunbo,
        lbone:state.Home.lbone,
        lbtwo:state.Home.lbtwo,
    }
}
class ingetral extends Component {
    constructor(){
        super()
        this.state={};
        this.scroll=[]
    }
    componentDidMount(){
        
        
    }
    render() {
        let more,url,title1,title2
        
        if(this.props.data!==''){
            setTimeout(()=>{
                for(var i=0;i<=1;i++){
                    this.scroll[i] =new BScroll('#HDwrap'+i,{
                        scrollX: true,
                        eventPassthrough: 'vertical' ,
                        click: true
                    })
                }
            },0)
           
            
        } 
        
        console.log(this.props.data)
        return (
            this.props.lunbo.map((value,index)=>{
                url = this.props.data.pageElementItem[2+index].title
                title1 = this.props.data.pageElementItem[2+index].name.split('&')[1]
                title2 = this.props.data.pageElementItem[2+index].name.split('&')[0]
                more = (<div key={value.id} className="swiper-slide item more">
                    <a href="more" className="view-more">
                        查看更多
                        <i className="iconfont">>></i>
                    </a>
                </div>)
                return(<IngetralWrap key={index} className="home-integral">
                    <div className="integral-img">
                        <div className="bg"></div> <img  alt="" className="responImg"
                            src={url}/> <a
                            href="index" className="content">
                            <div className="title">
                                {title1}
                                <i className='more'>></i></div>
                            <p className="text">{title2}</p>
                        </a>
                    </div>
                    <div id={'HDwrap'+index} className='HDwrap'>
                        <div className='letscroll'>
                            {
                                value.map((value)=>{
                                    return (
                                        <div key={value.product.id} className="swiper-slide item swiper-slide-active">
                                        <div  className="item-main">
                                            <a data-v-e8942a1c="" href="home" className="">
                                                <div className="item-img">
                                                    <img alt="" className="responImg" src={value.product.picUrl} lazy="loaded" />
                                                </div>
                                                <div className="item-content">
                                                    <p className="name">{value.name}</p>
                                                    <p className="price-1"><span className="price">¥{value.product.price}</span>
                                                        <span className="integral">{value.product.point?`+${value.product.point}积分`:''}</span></p>
                                                </div>
                                            </a>
                                        </div>
                                        </div>
                                    )
                                })
                            }
                            {more}
                        </div>
                    </div>
                </IngetralWrap>)
            })
        )
                
    }
}

export default connect(mapStateToProps)(ingetral);