import React, { Component } from 'react'
import {His} from './search.js'
import deleter from 'assets/imgs/deleter.png'
import {connect} from 'react-redux'
function mapstate(state){
    return {
        his:state.toJS().Search.his
    }
}
@connect(mapstate)
class hisearch extends Component {
    render() {
        return (
            <His className="search-record">
                <div className="line-content">
                    <div className="line-box">
                        <div className="content-left">
                            <p className="text">搜索记录</p>
                        </div>
                        <div className="content-right"><i className="icon"><img

                            src={deleter}
                            alt="" className="responImg" /></i></div>
                        </div>
                    </div>
                    <div className="record">
                        <div className="line-content"><a
                            href="/Wap/Product/List?keywords=%E7%BD%97%E6%8A%80" className="line-box">
                            <div className="content-left">
                                <p className="text">罗技</p>
                            </div>
                        </a></div>
                        <div className="line-content"><a href="/Wap/Product/List?keywords=12"
                            className="line-box">
                            <div className="content-left">
                                <p className="text">12</p>
                            </div>
                        </a></div>
                    </div>
                </His>
                );
            }
        }
        
export default hisearch;