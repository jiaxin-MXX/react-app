import React from 'react';
import { TabBar } from 'antd-mobile';

import Home from './home/homs'
import Classfiy from './classfiy/classfiy'

import BScroll from 'better-scroll'

import home from 'assets/svg/home.svg'
import homeActive from 'assets/svg/home-active.svg'
import all from 'assets/svg/all.svg'
import allActive from 'assets/svg/all-active.svg'
import browse from 'assets/svg/browse.svg'
import browseActive from 'assets/svg/browse-active.svg'
import cart from 'assets/svg/cart.svg'
import cartActive from 'assets/svg/cart-active.svg'
import mine from 'assets/svg/mine.svg'
import mineActive from 'assets/svg/mine-active.svg'

import { connect } from 'react-redux'

import {Zhezhao } from './home/home'
// import { BrowserRouter as Router } from 'react-router-dom'
let mapstatetoprops = (state)=>{
  return {
    scroll:state.Home.scroll,
    src:state.Home.src,
  }
}

@connect(mapstatetoprops)
class TabBarExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'home',
      hidden: false,
      fullScreen: true,
    };
  }
  handclick(){
    return ()=>{
      this.props.dispatch({
        type:'src',
        src:'',
      })
    }
  }
  componentDidMount(){
    let scroll=new BScroll('.am-tab-bar-item',{
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
      <>
      <Zhezhao ref='zhezhao' className='zhezhao' style={{display:this.props.src?"block":'none'}}>
        <div className="close">
            <span onClick={this.handclick()}>X</span>
        </div>
        <video ref='video' autoPlay="autoplay" controls="controls" src={this.props.src} style={{width: '100%'}}></video>
      </Zhezhao>
      <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0,background:'#f4f4f4' } : { height: 400 }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#949494"
          barTintColor="white"
          hidden={this.state.hidden}
        >
          <TabBar.Item
            title="首页"
            key="home"
            icon={<div style={{
              width: '.3rem',
              height: '.3rem',
              background: `url(${home}) center center /  .3rem .3rem no-repeat` }}
            />
            }
            selectedIcon={<div style={{
              width: '.3rem',
              height: '.3rem',
              background: `url(${homeActive}) center center /  .3rem .3rem no-repeat` }}
            />
            }
            selected={this.state.selectedTab === 'home'}
            onPress={() => {
              this.setState({
                selectedTab: 'home',
              });
            }}
            data-seed="logId"
          >
            <Home></Home>
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '.3rem',
                height: '.3rem',
                background: `url(${all}) center center /  .3rem .3rem no-repeat` }}
              />
            }
            selectedIcon={
              <div style={{
                width: '.3rem',
                height: '.3rem',
                background: `url(${allActive}) center center /  .3rem .3rem no-repeat` }}
              />
            }
            title="分类"
            key="fenlei"
            selected={this.state.selectedTab === 'fenlei'}
            onPress={() => {
              this.setState({
                selectedTab: 'fenlei',
              });
            }}
            data-seed="logId1"
          >
            <Classfiy></Classfiy>
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '.3rem',
                height: '.3rem',
                background: `url(${browse}) center center /  .3rem .3rem no-repeat` }}
              />
            }
            selectedIcon={
              <div style={{
                width: '.3rem',
                height: '.3rem',
                background: `url(${browseActive}) center center /  .3rem .3rem no-repeat` }}
              />
            }
            title="发现"
            key="find"
            selected={this.state.selectedTab === 'find'}
            onPress={() => {
              this.setState({
                selectedTab: 'find',
              });
            }}
          >
            <div>c</div>
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '.3rem',
                height: '.3rem',
                background: `url(${cart}) center center /  .3rem .3rem no-repeat` }}
              />
            }
            selectedIcon={
              <div style={{
                width: '.3rem',
                height: '.3rem',
                background: `url(${cartActive}) center center /  .3rem .3rem no-repeat` }}
              />
            }
            title="发现"
            key="cart"
            selected={this.state.selectedTab === 'cart'}
            onPress={() => {
              this.setState({
                selectedTab: 'cart',
              });
            }}
          >
            <div>d</div>
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '.3rem',
                height: '.3rem',
                background: `url(${mine}) center center /  .3rem .3rem no-repeat` }}
              />
            }
            selectedIcon={
              <div style={{
                width: '.3rem',
                height: '.3rem',
                background: `url(${mineActive}) center center /  .3rem .3rem no-repeat` }}
              />
            }
            title="发现"
            key="mine"
            selected={this.state.selectedTab === 'mine'}
            onPress={() => {
              this.setState({
                selectedTab: 'mine',
              });
            }}
          >
            <div>e</div>
          </TabBar.Item>
        </TabBar>
      </div>
      </>
    );
  }
}
export default TabBarExample
