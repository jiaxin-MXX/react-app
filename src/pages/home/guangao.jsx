import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GonggaoWrap } from './home'
function mapStateToProps(state) {
    return {
        data:state.Home.data.pageElementItem6
    }
}
class guangao extends Component { 
    render() {
        let data
        if(this.props.data){
            data=this.props.data.pageChildElementItem
        }
        return (
            <GonggaoWrap className="home-zone">
                <div className="zone-combo">
                    <div className="left"><a href="home"
                        className="content contents">
                        <div data-v-e8942a1c="">
                            <h3 className="content-name">{ data&&data[0].name}</h3>
                            <p className="content-text">{ data&&data[0].desc}</p>
                        </div>
                        <div className="content-img"><img alt=""
                            src={data&&data[0].url}
                            lazy="loaded" /></div>
                    </a></div>
                    <div className="right"><a href="/Wap/Package/found?PageId=41"
                        className="content ">
                        <div className="content-name">{data&&data[1].name}</div>
                        <div className="content-img"><img alt="" className="responImg"
                            src={data&&data[1].url}
                            lazy="loaded" /></div>
                    </a></div>
                </div>
                <div className="zone-integral"><a href="/Wap/Product/List?keywords=%E9%80%81"
                    className="content contents">
                    <div data-v-e8942a1c="">
                        <h3 className="content-name">{data&&data[2].name}</h3>
                        <p className="content-text">{data&&data[2].desc}</p>
                    </div>
                    <div className="content-img"><img alt="" className="responImg"
                        src={data&&data[2].url}
                        lazy="loaded" /></div>
                </a></div>
            </GonggaoWrap>
        );
    }
}

export default connect(mapStateToProps)(guangao)