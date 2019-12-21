import React, { Component } from 'react'
import {His} from './search.js'
import deleter from 'assets/imgs/deleter.png'
import {connect} from 'react-redux'
import {withRouter } from 'react-router-dom'

function mapstate(state){
    return {
        his:state.toJS().Search.his
    }
}
@connect(mapstate)
class hisearch extends Component {
    click=()=>{
        this.props.dispatch({
            type:'his',
            his:[]
        })
    }
    handleclcik=(value)=>{
        return ()=>{
            this.props.history.push({
                pathname:'/list',
                state:{
                    value
                }
            })
        }
    }
    render() {
        return (
                    this.props.his.length ? <His className="search-record">
                    <div className="line-content">
                        <div className="line-box">
                            <div className="content-left">
                                <p className="text">搜索记录</p>
                            </div>
                            <div onClick={this.click} className="content-right"><i className="icon"><img
    
                                src={deleter}
                                alt="" className="responImg" /></i></div>
                            </div>
                        </div>
                        <div className="record">
                            {
                                this.props.his.map((value)=>{
                                    return (<div key={value} onClick={this.handleclcik(value)} className="line-content"><div
                                    className="line-box">
                                   <div className="content-left">
                                       <p className="text">{value}</p>
                                   </div>
                               </div></div>)
                                })
                            }
                        </div>
                    </His> : ''
                );
            }
        }
        
export default hisearch;