import React, { Component } from 'react';
import {Wrap} from './product'
import { withRouter } from 'react-router-dom'

@withRouter
class product extends Component {
    back=()=>{
        this.props.history.goBack()
    }
    render() {
        return (
            <Wrap>
                <div className="head-box">
                    <header className="mint-header is-fixed">
                        <span onClick={this.back}>{'<'}</span>
                        <div className="mint-header-title">商品详情</div>
                    </header>
                </div>
                <div>
                    
                </div>
            </Wrap>
        );
    }
}

export default product;