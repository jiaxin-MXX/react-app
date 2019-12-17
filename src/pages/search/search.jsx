import React, { Component } from 'react';
import { connect } from 'react-redux'
import Top from './top.jsx'
import Hot from './hotsearch.jsx'
import His from './hisearch.jsx'
import Find from './find.jsx'
import {Search} from './search.js'

function mapstatetoprops(state){
    return {
        onoff:state.toJS().Search.onoff
    }
}
@connect(mapstatetoprops)
class search extends Component {
    render() {
        return (
            <Search style={{zIndex:this.props.onoff}}>
               <Top></Top>
               <Find></Find>
               <Hot></Hot>
               <His></His>
            </Search>
        );
    }
}

export default search;