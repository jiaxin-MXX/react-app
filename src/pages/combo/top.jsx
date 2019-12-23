import React, { Component } from 'react';
import {Hed} from '../find/mian.js'
import { Icon } from 'antd-mobile';
class top extends Component {
    render() {
        return (
            <Hed className="head-box">
                <div className="mint-header is-fixed">
                    <Icon color='#666' type='left' />
                    <h1 className="mint-header-title" style={{marginLeft: '-.22rem'}}>游戏套餐</h1>
                </div>
            </Hed>
        );
    }
}

export default top;