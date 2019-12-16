import React, { Component} from 'react';
import { connect } from 'react-redux'
import { Carousel } from 'antd-mobile'
import {SwiperWrap} from './home'
import load from 'assets/imgs/loading.gif'
function mapStateToProps(state){
    return {
        data:state.toJS().Home.data,
        imglist:state.toJS().Home.imglist
    }
}
class swiper extends Component {
    constructor(){
        super()
        this.state={}
    }
    render() {
        return (
            <SwiperWrap>
                <Carousel
                autoplay
                infinite
                dots={this.props.data!==''}
                >
                {
                    this.props.imglist && this.props.imglist.map((value,index)=>{
                        if(typeof(value)==='object'){  
                            return (
                                <img key={value.id} src={value.url} alt=""/>
                                
                            )
                        }else{
                            return (
                                <img key={index} src={load} alt=""/>
                            )
                        }
                        
                    })
                }
                </Carousel>
            </SwiperWrap>
        );
    }
}

export default connect(mapStateToProps)(swiper);