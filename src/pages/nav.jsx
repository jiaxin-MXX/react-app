import React, { Component } from 'react';
import {Nav} from './center.js'
import home from 'assets/svg/home.svg'
import homeActive from 'assets/svg/home-active.svg'
import all from 'assets/svg/all.svg'
import allActive from 'assets/svg/all-active.svg'
import browse from 'assets/svg/browse.svg'
import browseActive from 'assets/svg/browse-active.svg'
import cart from 'assets/svg/cart.svg'
import cartActive from 'assets/svg/cart-active.svg'
import mine from 'assets/svg/mine.svg'
import mineActive from 'assets/svg/mine-active.svg'
class nav extends Component {
    state={
        nav:[
            {
                id:'001',
                path:'/home',
                name:'首页',
                img:home,
                Aimg:homeActive,
            },
            {
                id:'002',
                path:'/classfiy',
                name:'分类',
                img:all,
                Aimg:allActive,
            },
            {
                id:'003',
                path:'/find',
                name:'发现',
                img:browse,
                Aimg:browseActive,
            },
            {
                id:'004',
                path:'/buycar',
                name:'购物车',
                img:cart,
                Aimg:cartActive,
            },
            {
                id:'005',
                path:'/mine',
                name:'我的',
                img:mine,
                Aimg:mineActive,
            },
        ]
    }
    click=()=>{
        console.log(this.props)
    }
    render() {
        let path = this.props.location.pathname
        return (
            <Nav>
                {
                    this.state.nav.map((value)=>{
                        return (
                            <div key={value.id} onClick={this.click} className={path===value.path?'active nav-list':'nav-list'}><a href={value.path} className="">
                                <img className='icon' alt='icon' src={path===value.path?value.Aimg:value.img} />
                                <p className="name">{value.name}</p>
                            </a></div>
                        )
                    })
                }
            </Nav>
        );
    }
}

export default nav;