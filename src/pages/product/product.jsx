import React, { Component } from 'react';
import { Wrap} from './product'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import Top from './top' 
import Swiper from './swiper' 
import Info from './info'
function mapStateToProps(state){
    return {
        data:state.Prodcut.data
    }
}
@withRouter
@connect(mapStateToProps)
class product extends Component {
    state={
        data:null,
    }
    componentDidMount(){
        console.log(this.props)
    }
    render() {
        return (
            <Wrap>
                <Top></Top>
                <div class='scroll'>
                    <div>
                        <Swiper></Swiper>
                        <Info></Info>
                    </div>
                </div>   
            </Wrap>
        );
    }
}

export default product;