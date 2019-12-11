import React, { Component } from 'react';
import { connect } from 'react-redux'
import png1 from 'assets/imgs/1.png'
import png2 from 'assets/imgs/2.png'
import png3 from 'assets/imgs/3.png'
import png4 from 'assets/imgs/4.png'
import {GongWrap} from  './home.js'

function mapStateToProps(state){
    return {
        data:state.Home.data,
        imglist:state.Home.imglist
    }
}
class GongGe extends Component {
    constructor(){
        super()
        this.state={}
    }
    render() {
        return (
            <GongWrap className="home-item bottom">
                <div className="item"><a  href="/Wap/Product/BonusPoints" className="item-cont">
                        <div  className="item-img"><img src={png1} alt='会员' className="responImg"/></div>
                        <p  className="item-text">会员优惠</p>
                    </a></div>
                <div className="item"><a  href="/Wap/Product/BonusPoints" className="item-cont">
                        <div  className="item-img"><img src={png2} alt='游戏' className="responImg"/></div>
                        <p  className="item-text">游戏专区</p>
                    </a></div>
                <div className="item"><a  href="/Wap/Product/BonusPoints" className="item-cont">
                        <div  className="item-img"><img src={png3} alt='新品' className="responImg"/></div>
                        <p  className="item-text">新品上市</p>
                    </a></div>
                <div className="item"><a  href="/Wap/Product/BonusPoints" className="item-cont">
                        <div  className="item-img"><img src={png4} alt='企业' className="responImg"/></div>
                        <p  className="item-text">企业采购</p>
                    </a></div>
            </GongWrap>
        );
    }
}

export default connect(mapStateToProps)(GongGe);