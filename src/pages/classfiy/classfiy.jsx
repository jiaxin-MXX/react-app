import React, { Component } from 'react';
import Search from '../../compoment/search'
import { Fenlei } from './classfiy.js'
import Fenl from './fenlei'
class classfiy extends Component {
    render() {
        return (
            <Fenlei>
                <Search></Search>
                <Fenl></Fenl>
            </Fenlei>
        );
    }
}

export default classfiy;