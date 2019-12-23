import React from 'react';
import { Find,LL } from './search.js'
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom'

function mapstate(state){
    return {
        ok:state.toJS().Search.ok
    }
}

const find = (props)=>{
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
        <Find className="search-list" style={{display:props.ok?'block':'none'}}>
            {
                props.ok && props.ok.map((value)=>{
                    return(
                        <LL width='0 0 1px 0' key={value} onClick={click(value)} color='#e0e0e0' className="item"><span className="Searchullispan">{value}</span></LL>
                    )
                })
            }
        </Find>
    )
}
export default withRouter(connect(mapstate)(find))