import React, { Component } from 'react';
import {InfoWrap} from './product.js'
class info extends Component {
    render() {
        return (
            <InfoWrap className="product-info bottom">
                <div >
                        <div className="product-price border-px">
                                <p className="price"><label className="yuan">¥</label>299.00

                                </p>
                        </div>
                </div>
                <div className="product-name">
                        罗技 G402高速追踪游戏鼠标
                </div>
                <ul className="product-introduce ">
                        <li className="item border-right-px">
                                <div className="item-img"><img 
                                                src="https://images.wincheers.net/UpLoad/Web/ProductImg/2019-01-24/NEW_XM/DPI.png"
                                                alt="" className="responImg" /></div>
                                <p className="title">分辨率</p>
                                <p className="text">250-4000dpi</p>
                        </li>
                        <li className="item border-right-px">
                                <div className="item-img"><img 
                                                src="https://images.wincheers.net/UpLoad/Web/ProductImg/2019-01-24/NEW_XM/可编程G键.png"
                                                alt="" className="responImg" /></div>
                                <p className="title">可编程G键</p>
                                <p className="text">8个</p>
                        </li>
                        <li className="item border-right-px">
                                <div className="item-img"><img 
                                                src="https://images.wincheers.net/UpLoad/Web/ProductImg/2019-01-24/NEW_XM/背光.png"
                                                alt="" className="responImg" /></div>
                                <p className="title">背光</p>
                                <p className="text">蓝色</p>
                        </li>
                        <li className="item border-right-px">
                                <div className="item-img"><img 
                                                src="https://images.wincheers.net/UpLoad/Web/ProductImg/2019-01-24/NEW_XM/质保.png"
                                                alt="" className="responImg" /></div>
                                <p className="title">质保</p>
                                <p className="text">二年</p>
                        </li>
                </ul>
        </InfoWrap>
        );
    }
}

export default info;