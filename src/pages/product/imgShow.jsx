import React, { Component } from 'react';
import {ImgShow} from './product.js'
import { connect } from 'react-redux' 
function mapStateToProps(state){
    return {
        data:state.toJS().Prodcut.data
    }
}
@connect(mapStateToProps)
class imgShow extends Component {
    render() {
        return (
            <ImgShow>
                {
                    this.props.data ? <div dangerouslySetInnerHTML = {{ __html:this.props.data.desc }}></div> : ''
                }
            </ImgShow>
        );
    }
}

export default imgShow;