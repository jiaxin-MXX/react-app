import React from 'react';
import { Find,LL } from './search.js'
import {connect} from 'react-redux'
function mapstate(state){
    return {
        ok:state.toJS().Search.ok
    }
}

const find = (props)=>{
    let click=(value)=>{
        return()=>{
            console.log(value)
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
export default connect(mapstate)(find)