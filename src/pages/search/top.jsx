import React, { Component } from 'react';
import {Top} from './search.js'
import {Icon} from 'antd-mobile'

class top extends Component {
    render() {
        return (
            <Top className="search border-px">
                <div className="mint-cell mint-field is-nolabel">
                    <Icon type="search" size='xxs' />
                    <input placeholder="搜索商品" type="text" className="mint-field-core" />
                </div>
                <span className="cancel">取消</span>
            </Top>
        );
    }
}

export default top;