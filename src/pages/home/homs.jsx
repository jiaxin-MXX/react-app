import React, { Component } from 'react';
import Top from './top'
import Swiper from './swiper'
import GongGe from './GongGe.jsx'
import Ingetral from './ingetral.jsx'
import Slide from './slide'
import Gonggao from './guangao'
import Showlist from './showlist'
class homs extends Component {
    constructor(){
        super();
        this.state={
            imglist:''
        }
    }
    async componentDidMount(){      
    }
    render() {
        return (
            <div>
                <Top></Top>
                <Swiper></Swiper>
                <Gonggao></Gonggao>
                <GongGe></GongGe>
                <Ingetral></Ingetral>
                <Slide></Slide>
                <Showlist></Showlist>
            </div>
        );
    }
}

export default homs;