import React, { Component } from 'react';
import {Bottom} from './product.js'
import home from 'assets/imgs/home.png'
import talk from 'assets/imgs/talk.png'
import car from 'assets/imgs/car.png'
class bottom extends Component {
    render() {
        return (
            <Bottom className="footer-cart">
                <div className="footer-content border-top-px">
                    <div className="item items"><a href="/Home" className="router-link-active">
                        <div className="item-img"><img data-v-172ec816=""
                            src={home}
                            alt="" /></div>
                        <p className="text">首页</p>
                    </a></div>
                    <div className="item items">
                        <div className="item-img"><img data-v-172ec816=""
                            src={talk}
                            alt="" /></div>
                        <p className="text">客服</p>
                    </div>
                    <div className="item"><a href="/Wap/Trade/ShoppingCart" className="">
                        <div className="item-img"><img data-v-172ec816=""
                            src={car}
                            alt="" /> <span className="count">0</span></div>
                        <p className="text">购物车</p>
                    </a></div>
                    <div className="item-box">
                        <div className="item-btns">
                            加入购物车
                        </div>
                    </div>
                </div>
            </Bottom>
        );
    }
}

export default bottom;