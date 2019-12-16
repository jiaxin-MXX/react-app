import React, { Component } from 'react';
import Top from './top.jsx'
import {Search} from './search.js'
class search extends Component {
    render() {
        return (
            <Search style={{zIndex:9999}}>
               <Top></Top>
            </Search>
        );
    }
}

export default search;