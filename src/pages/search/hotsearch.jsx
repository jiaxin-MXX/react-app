import React from 'react';
import { Hot } from './search.js'
import {connect} from 'react-redux'
import {withRouter } from 'react-router-dom'
import _ from 'lodash'
function mapstate(state){
    return {
        hot:state.toJS().Search.search
    }
}
const hotsearch = (props)=>{
    let click=(value)=>{
        return ()=>{
            props.history.push({
                pathname:'/list',
                state:{
                    value
                }
            })
        }
    }
    return (
        <Hot className="search-hot bottom">
                <h3 className="hot">热搜</h3>
                <div className="search-content">
                    {
                        props.hot && _.slice(props.hot,0,10).map((value)=>{
                            return (<span key={value} onClick={click(value)} className="item"><div className="">
                            {value}
                            </div></span>)
                        })
                    }
                </div>
            </Hot>
    )
}
export default withRouter(connect(mapstate)(hotsearch));