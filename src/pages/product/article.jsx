import React, { Component } from 'react';
import { Article } from './product.js'
import { Icon } from 'antd-mobile'
import BScroll from 'better-scroll'
import { postData } from 'utils/http'
import { withRouter } from 'react-router-dom'

@withRouter
class article extends Component {
    state = {
        list: null
    }
    async componentDidMount() {
        let result = await postData({
            url: 'api/services/app/social/GetRelevantSocial',
            headers: {
                client_id: 'logitech'
            },
            params: {
                LableName: this.props.location.state.shortTitle
            }
        })
        this.setState({
            list:result
        })
        setTimeout(()=>{
            new BScroll('.waterfall', {
                scrollX: true,
                click: true
            })
        },0)
    }
    render() {
        return (
            this.state.list ?  <Article className="goods-article bottom line-content">
            <div className="line-box">
                <div className="content-left">
                    <p className="text">相关文章</p>
                </div>
                <div className="content-right"><Icon color='#666' type="right" /></div>
            </div>
            <div className="article-list waterfall">
                <div className='showScroll'>
                    {
                        this.state.list && this.state.list.map((value,index) => {
                            return (
                                <div key={index} className="item">
                                    <div className="item-img"><img
                                        src={value.url}
                                        alt="" className="responImg" /></div>
                                    <div className="item-info">
                                        <div className="block-cont">
                                            <div className="head-photo"><img data-v-172ec816=""
                                                src={value.avatar}
                                                alt="" className="responImg" /></div>
                                            <p className="account">{value.crmBuyerName}</p>
                                        </div>
                                        <p className="name">{value.title}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </Article> : ''
        );
    }
}

export default article;