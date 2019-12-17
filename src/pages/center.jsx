import React, { Component } from 'react';
import {Bottom} from './center.js'
import { Switch,Route,Redirect,withRouter} from 'react-router-dom'
import { CSSTransition } from 'react-transition-group';
import {Zhezhao } from './home/home'


import Search from 'pages/search/search.jsx'
import home from 'pages/home/homs'
import classfiy from 'pages/classfiy/classfiy.jsx'
// import {  } from 'immutable'
import product from 'pages/product/product.jsx'
import { connect } from 'react-redux'
import Nav from './nav'


let mapstatetoprops = (state)=>{
    return {
        src:state.toJS().Home.src,
        onoff:state.toJS().Search.onoff,
    }
  }
  
@connect(mapstatetoprops)
class center extends Component {
    handclick(){
        return ()=>{
          this.props.dispatch({
            type:'src',
            src:'',
          })
        }
    }
    render() {
        return (
            <Bottom>
                 <Zhezhao ref='zhezhao' className='zhezhao' style={{display:this.props.src?"block":'none'}}>
                    <div className="close">
                        <span onClick={this.handclick()}>X</span>
                    </div>
                    <video ref='video' autoPlay="autoplay" controls="controls" src={this.props.src} style={{width: '100%'}}></video>
                </Zhezhao>
                <CSSTransition 
                in={this.props.onoff===-1?false:true} 
                timeout={1000} 
                classNames={{
                    enter: 'animated',
                    enterActive: 'fadeInRight',
                    exit: 'animated',
                    exitActive: 'fadeOutRight',
                }}
                onExiting={(cmp)=>{
                    cmp.style.zIndex=9999
          
                }}
                onExited={(cmp)=>{
                    cmp.style.zIndex=-1
                }}
                >
                    <Search></Search>
                </CSSTransition>
                <Switch>
                    <Route
                        path='/home'
                        component={home}
                    />
                    <Route 
                        path='/classfiy'
                        component={classfiy}
                    />
                    <Route 
                        path='/product'
                        component={product}
                    />
                    <Redirect 
                        exact
                        from='/'
                        to='/home'
                    />
                </Switch>
                <Route 
                    component={['/product','/search'].some((value)=>{
                        return value===this.props.location.pathname
                    })?'':Nav}
                />
            </Bottom>
        );
    }
}

export default withRouter(center);