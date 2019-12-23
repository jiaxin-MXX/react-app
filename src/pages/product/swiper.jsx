import React, { Component } from 'react';
import { PWrap } from './product'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Swiper1 from 'swiper'
import play from 'assets/imgs/onoff.png'
function mapStateToProps(state){
    return {
        data:state.toJS().Prodcut.data
    }
}
@withRouter
@connect(mapStateToProps)
class swiper extends Component {
    state={
        data:this.props.data
    }
    play=() =>{
        let Img = this.refs.Iwrap
        let Vedio = this.refs.Vwrap
        Img.style.display='none'
        Vedio.style.display='block'
        Vedio.play()
        Vedio.onended = function(){
            Vedio.style.display='none'
            Img.style.display='block'
        }
    }
    render() {
        
        if(this.props.data !== this.state.data){
            let that = this
            setTimeout(() => {
                that.Myswiper && that.Myswiper.destroy()
                that.Myswiper=new Swiper1 ('#swiper1', {
                        pagination: {
                        el: '.swiper-pagination',
                        },
                    }) 
                
                }, 0);                
        }
        
        return (
            <PWrap className='productWrap'>
                <div>
                    <div id='swiper1' className="swiper-container product-slide">
                        <div className="swiper-wrapper">
                            {
                                (this.props.data && this.props.data.video) ? (
                                    <div className="swiper-slide swiper-video">
                                        <div ref='Iwrap' style={{ width: '100%', display: 'block' }} className="video">
                                            <div style={{ background: '#f4f4f4' }}><img
                                                src={this.props.data.picUrl} alt=""
                                                className="responImg" /></div>
                                            <div onClick={this.play} className="icon-play"><img
                                                src={play}
                                                alt="" /></div>
                                        </div> <video ref='Vwrap' controls="controls"
                                            id="videoPlay"
                                            src={this.props.data.video}
                                            style={{ width: '100%', display: 'none' }}></video>
                                    </div>
                                ) : ''
                            }
                            {
                                this.props.data && this.props.data.productImageList.map((value) => {
                                    return (
                                        <div key={value.id} className="swiper-slide"><img
                                            src={value.url} alt=""
                                            className="responImg" />
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className="swiper-pagination"></div>
                    </div>
                </div>
            </PWrap>
        );
    }
}

export default swiper;