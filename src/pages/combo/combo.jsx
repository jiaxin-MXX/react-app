import React, { Component } from 'react';
import {Combo} from './combo.js'
import Bom from '../product/bottom'
import Hed from './top'
import Com from '../product/combo'
import {withRouter} from 'react-router-dom'
@withRouter
class combo extends Component {
    
    render() {
        return (
            <Combo>
                <Hed></Hed>
                <div className='center'>
                    <div>
                        <img src={this.props.location.state.img} alt=""/>
                        <Com></Com>
                    </div>
                </div>
                <Bom />
            </Combo>
        );
    }
}

export default combo;