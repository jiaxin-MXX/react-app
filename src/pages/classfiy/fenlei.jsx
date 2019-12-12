import React, { Component } from 'react';
import {Center} from './classfiy.js'
import {postData} from 'utils/http'
class fenlei extends Component {
    constructor(){
        super()
        this.state={
            defaultitem:'鼠标'
        }
    }
    change=(id,title)=>{
        return ()=>{
            this.setState({
                defaultitem:title
            })
            console.log(id)
        }
    }
    async componentDidMount(){
        this.result =await postData({
            url:'/api/services/app/tags/GetLgParenTagList',
            headers:{
                client_id:'logitech'
            }
        })
        this.list=await postData({
            
        })
        console.log(this.result)
    }
    render() {
        return (
            <Center>
                <div className="category-nav">
                    {
                        this.result && this.result.map((value)=>{
                            return (
                                (this.state.defaultitem === value.title)
                                ?<div key={value.id} className="item active">{value.title}</div>
                                :<div key={value.id} onClick={this.change(value.id,value.title)} className="item">{value.title}</div>
                            )
                        })
                    }
                </div>
            </Center>
        );
    }
}

export default fenlei;