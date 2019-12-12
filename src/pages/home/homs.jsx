import React, { Component } from 'react';
import Top from './top'
import Swiper from './swiper'
import GongGe from './GongGe.jsx'
import Ingetral from './ingetral.jsx'
import Slide from './slide'
import Gonggao from './guangao'
import Showlist from './showlist'
import { connect } from 'react-redux'
import BScroll from 'better-scroll'
let mapstatetoprops = (state)=>{
    return {
      scroll:state.Home.scroll,
    }
  }
  
@connect(mapstatetoprops)
class homs extends Component {
    constructor(){
        super();
        this.state={
            imglist:''
        }
    }
    componentDidMount(){  
        let scroll=new BScroll('.center',{
            click:true,
            pullUpLoad:true,
            probeType:2,
          }) 
          this.props.dispatch({
            type:'scroll',
            scroll,
          })
          setTimeout(()=>{
            scroll.refresh()
          },0)    
    }
    render() {
        return (
            <div className='center' style={{width:'100%',flex:1,overflow:'hidden'}}>
                <div>
                    <Top></Top>
                    <Swiper></Swiper>
                    <Gonggao></Gonggao>
                    <GongGe></GongGe>
                    <Ingetral></Ingetral>
                    <Slide></Slide>
                    <Showlist></Showlist>
                </div>
            </div>
        );
    }
}

export default homs;