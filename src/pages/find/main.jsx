import React, { Component } from 'react';
import { Main, Cen, List } from './mian'
import {withRouter} from 'react-router-dom'
import Top from './top'
@withRouter
class main extends Component {
    state={
        list:[
            {
                img:'https://wincheers.oss-cn-shanghai.aliyuncs.com/UpLoad/%E6%B8%B8%E6%88%8F.jpg',
                page:[56,57,58,128],
                PageId:15,
                Type:1
            },
            {
                img:'https://wincheers.oss-cn-shanghai.aliyuncs.com/UpLoad/%E5%8A%9E%E5%85%AC.jpg',
                page:[125,126],
                PageId:30,
                Type:2
            },
            {
                img:'https://wincheers.oss-cn-shanghai.aliyuncs.com/UpLoad/%E6%B8%B8%E6%88%8F.jpg',
                page:[122,123,124],
                PageId:31,
                Type:2
            }
        ]
    }
    click=(i)=>{
        return ()=>{
            this.props.history.push({
                pathname:'/combo',
                state:this.state.list[i]
            })
        }
    }
    render() {
        return (
            <Main>
                <Top></Top>
                <Cen>
                    <List onClick={this.click(0)} className="content">
                        <div className='con'>
                            <div className="content-img"> <img src="https://images.wincheers.net/2019-1-29/youxi.jpg" /> </div>
                            <div className="content-text">
                                <h3 className="content-h3"> 游戏装备 升级自选 </h3>
                                <p className="content-p"> 竞技伙伴 由您来选 套餐购买低至7折 </p>
                            </div>
                        </div>
                        
                    </List>
                    <List onClick={this.click(1)} className="content"> <div>
                            <div className="content-img"> <img src="https://images.wincheers.net/2019-1-29/bangong.jpg" /> </div>
                            <div className="content-text">
                                <h3 className="content-h3"> 自在办公 升级自选 </h3>
                                <p className="content-p"> 自行定位办公环境 升级自选低至6折 </p>
                            </div>
                        </div>
                    </List>
                    <List onClick={this.click(2)} className="content"> <div>
                            <div className="content-img"> <img src="https://images.wincheers.net/2019-1-29/yinying.jpg" /> </div>
                            <div className="content-text">
                                <h3 className="content-h3"> 影音套餐 升级自选 </h3>
                                <p className="content-p"> 您的音乐世界由您掌控 升级自选低至8折 </p>
                            </div>
                        </div>
                    </List>
                </Cen>
            </Main>
        );
    }
}

export default main;