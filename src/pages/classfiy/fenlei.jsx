import React, { Component } from 'react';
import {Center} from './classfiy.js'
import {postData} from 'utils/http'
import BScroll from 'better-scroll'
import {withRouter} from 'react-router-dom'

@withRouter
class fenlei extends Component {
    constructor(){
        super()
        this.state={
            list1:[],
            list2:[],
            defaultitem:'鼠标'
        }
    }
    change=(id,title)=>{
        return async ()=>{
            this.setState({
                defaultitem:title,
            })
            let result2 =await this.getlist2(id)
            this.setState({
                list2:result2,
            })
            for(var i=0;i<result2.length;i++){
                new BScroll('#scroll'+i,{
                    scrollX: true,
                    eventPassthrough: 'vertical' ,
                    click: true
                })
            }
        }
    }
    async getlist2(ParenId){
        let result2=await postData({
            url:'/api/services/app/tags/GetLgTagList',
            headers:{
                client_id:'logitech'
            },
            params:{
                ParenId
            }
        })
        return result2
    }
    async componentDidMount(){
        let result1 =await postData({
            url:'/api/services/app/tags/GetLgParenTagList',
            headers:{
                client_id:'logitech'
            }
        })
        let result2 =await this.getlist2(175)
        this.setState({
            list1:result1,
            list2:result2,
        })
        for(var i=0;i<result2.length;i++){
            new BScroll('#scroll'+i,{
                scrollX: true,
                eventPassthrough: 'vertical' ,
                click: true
            })
        }
    }
    click=(id)=>{
        return ()=>{
            this.props.history.push({
                pathname:'/product',
                state:{
                    id
                }
            })
        } 
    }
    render() {
        return (
            <Center>
                <div className="category-nav">
                    {
                        this.state.list1.map((value)=>{
                            return (
                                (this.state.defaultitem === value.title)
                                ?<div key={value.id} className="item active">{value.title}</div>
                                :<div key={value.id} onClick={this.change(value.id,value.title)} className="item">{value.title}</div>
                            )
                        })
                    }
                </div>
                <div className="category-content">
                    {
                        this.state.list2.map((value,index)=>{
                            return (
                                <div key={value.id} className="category-item">
                                    <div className="category-type">
                                        <h3 className="type-name">{value.title}</h3> 
                                        <i className="iconfont">></i>
                                    </div>
                                    <div className="category-scroll">
                                       <div id={'scroll'+index} className='scrollwrap'>
                                        <div className='bord'>
                                                {
                                                    value.productList.map((temp)=>{
                                                        return (
                                                            <div onClick={this.click(temp.id)} key={temp.id} className="item">
                                                                <div className="item-main">
                                                                    <div className="item-img">
                                                                        <img src={temp.picUrl} alt=""
                                                                            className="responImg" />
                                                                    </div>
                                                                    <div className="item-content">
                                                                        <p className="name">{temp.shortTitle}</p>
                                                                        <p className="price-1"><span className="price">¥ {temp.price}</span></p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                }
                                                <div className="item more">
                                                    查看更多
                                                    <i className="iconfont">》</i>
                                                </div>
                                            </div>
                                       </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </Center>
        );
    }
}

export default fenlei;