import React, { Component } from 'react';
import Search from '../../compoment/search.jsx'
import Top from './top.jsx'
import Center from './center.jsx'
import {Wrap} from './list.js'
class list extends Component {
    render() {
        return (
            <Wrap>
                <Search width='0 0 1px 0' color='#949494'></Search>
                <Top></Top>
                <Center></Center>
            </Wrap>
        );
    }
}

export default list;