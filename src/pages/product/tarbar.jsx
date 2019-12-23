import React, { Component } from 'react';
import { Tabs, WhiteSpace } from 'antd-mobile';
import { connect } from 'react-redux' 
import ImgShow from './imgShow'

function mapStateToProps(state){
    return {
        data:state.toJS().Prodcut.data
    }
}
@connect(mapStateToProps)
class tarbar extends Component {
    state = {
        tabs: [
            { title: '商品详情' },
            { title: '参数详情' },
        ]
    }
    componentDidMount(){
        
    }
    render() {
        return (
            <div>
                <WhiteSpace />
                <Tabs tabs={this.state.tabs} initialPage={0} animated={true} useOnPan={false} tabBarActiveTextColor={'#fd2645'} tabBarUnderlineStyle={{
                    width: '30%',
                    marginLeft: '10%', borderColor: '#fd2645'
                }}>
                    <div style={{backgroundColor: '#fff' }}>
                       <ImgShow />
                    </div>
                    <div style={{backgroundColor: '#fff' }}>
                        {
                            this.props.data ? <div style={{padding:'.085335rem'}} dangerouslySetInnerHTML = {{ __html:this.props.data.specifications }}></div> : ''
                        }
                </div>
                </Tabs>
                <WhiteSpace />
            </div>
        );
    }
}

export default tarbar;