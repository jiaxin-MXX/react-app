import React, { Component } from 'react';
import { Wrap} from './product'
import { withRouter } from 'react-router-dom'
import BScroll from 'better-scroll'
import Top from './top' 
import Swiper from './swiper' 
import Info from './info'

import Btm from './bottom'
import Count from './count'
import Eval from './evaluate'
import Combo from './combo'
import Article from './article'
import Tarbar from './tarbar'
@withRouter
class product extends Component {
    state={
        data:null,
    }
    componentDidMount(){
        console.log(this.props)
        new BScroll('.scroll',{
            click:true
        })
    }
    render() {
        return (
            <Wrap>
                <Top></Top>
                <div className='scroll'>
                    <div>
                        <Swiper></Swiper>
                        <Info></Info>
                        <Count></Count>
                        <Eval></Eval>
                        <Combo></Combo>
                        <Article></Article>
                        <Tarbar></Tarbar>
                    </div>
                </div>
                <Btm></Btm> 
            </Wrap>
        );
    }
}

export default product;