import React, { Component } from 'react';
import { Eval } from './product.js'
import BScroll from 'better-scroll'
class evaluate extends Component {
    componentDidMount(){
        new BScroll('.scrollWrap',{
            click:true,
            scrollX: true,
            eventPassthrough: 'vertical' ,
          }) 
    }
    render() {
        return (
            <Eval className="product-evaluation bottom">
                <div className="line-content">
                    <div className="line-box">
                        <div className="content-left">
                            <p className="text">商品评价</p>
                        </div>
                        <div className="content-right">
                            <p className="text">111</p> <i className="iconfont">></i>
                        </div>
                    </div>
                </div>
                <div className='scrollWrap'>
                    <ul className="evaluation">
                        <li className="item"><a
                            href="/Wap/Product/ProductBuyQA?id=11768&amp;ProductId=3779" className="item-img"><img
                                src="https://images.wincheers.net/2018-09-20/20180920162956_4240.jpg" /></a>
                            <p className="count"><b className="weight">3</b>张</p>
                    </li>
                            <li className="item"><a
                                href="/Wap/Product/ProductBuyQA?id=11500&amp;ProductId=3779" className="item-img"><img
                                    src="https://images.wincheers.net/2018-05-09/20180509164846_5381.jpg" /></a>
                                <p className="count"><b className="weight">3</b>张</p>
                    </li>
                                <li className="item"><a
                                    href="/Wap/Product/ProductBuyQA?id=11497&amp;ProductId=3779" className="item-img"><img
                                        src="https://images.wincheers.net/2018-05-09/20180509164500_5537.jpg" /></a>
                                    <p className="count"><b className="weight">3</b>张</p>
                    </li>
                                    <li className="item"><a
                                        href="/Wap/Product/ProductBuyQA?id=11300&amp;ProductId=3779" className="item-img"><img
                                            src="https://images.wincheers.net/UpLoad/logitech/SingleSun/2016-06-14/20160614210102_5560.png"
                                            className="img-responsive" /></a>
                                        <p className="count"><b className="weight">3</b>张</p>
                    </li>
                                        <li className="item"><a
                                            href="/Wap/Product/ProductBuyQA?id=11299&amp;ProductId=3779" className="item-img"><img
                                                src="https://images.wincheers.net/UpLoad/logitech/SingleSun/2016-06-08/20160608211026_1081.jpg"
                                                className="img-responsive" /></a>
                                            <p className="count"><b className="weight">3</b>张</p>
                    </li>
            </ul>
                </div>
</Eval>
        );
    }
}
                        
export default evaluate;