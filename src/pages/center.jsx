import React, { Component } from 'react';
import {Bottom} from './center.js'
import { Switch,Route,Redirect } from 'react-router-dom'
import {Zhezhao } from './home/home'

import home from 'pages/home/homs'
import classfiy from 'pages/classfiy/classfiy.jsx'
import { connect } from 'react-redux'
import Nav from './nav' 
let mapstatetoprops = (state)=>{
    return {
        src:state.Home.src,
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
                <Switch>
                    <Route
                        path='/home'
                        component={home}
                    />
                    <Route 
                        path='/classfiy'
                        component={classfiy}
                    />
                    <Redirect 
                        exact
                        from='/'
                        to='/home'
                    />
                </Switch>
                <Route 
                    component={Nav}
                />
            </Bottom>
        );
    }
}

export default center;