import styled from 'styled-components'
import border from '../../compoment/border'

import quan from 'assets/imgs/quan.png'
export const Wrap = styled.div`
    height:100%;
    overflow:hidden;
    display:flex;
    flex-direction:column;
    .scroll{
        flex:1;
        overflow:hidden;
        display:flex;
        flex-direction:column;
    }
`

export const Top = styled.div`
    height:.37542rem;
    background:#fff;
    .mint-header{
        display:flex;
        align-items: center;
        height: 100%;
        padding:0 .1536rem;
        span{
            flex: .5;
        }
        .mint-header-title{
            font-weight: 400;
           font-size:.13rem;
            color: #666;
        }
    }
`

export const PWrap = styled.div`
    height: 0;
    font-size: 0;
    padding-bottom:100%;
    .swiper-video{
        height:100vw;
        background: #000;
        .icon-play{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: flex;  
            align-items: center;
            justify-content: center;
            img{
                width:.5rem
            }
        }
        video{
            padding-top: .725335rem;
        }
    }
    img{
        width:100%
    }
`

export const InfoWrap = styled.div`
    background:#FFF;
    .product-name{
        font-size: .13rem;
        height: .384rem;
        line-height: .192rem;
        padding: .170665rem .093865rem 0 .081065rem;
        box-sizing: content-box;
    }
    .product-introduce{
        display: flex;
        align-items: center;
        justify-content: center;
        padding: .1664rem .042665rem;
        .item{
            flex: 1;
            text-align: center;
            img{
                width: .170625rem;
                height: .170625rem;
                margin: auto;
            }
            
            .title{
                color: #666;
                font-size: .11rem;
                margin: .106665rem auto .0512rem;
            }
            .text{
                color: #999;
                font-size: .1rem;
            }
        }
        
    }
`
export const Bottom = styled.div`
    height: .477865rem;
    .footer-content{
        height: .477865rem;
        display: flex;
        background: #fff;
        .item{
            position: relative;
            flex: 1;
            text-align: center;
            padding: .085333rem 0 0;
            img{
                margin: auto;
                width: .170625rem;
                margin-bottom: .068265rem;
            }
            .count{
                width: .12797rem;
                height: .12797rem;
                background: url(${quan}) no-repeat;
                background-size: 100% 100%;
                position: absolute;
                top: .03rem;
                right: .2rem;
                display: flex;
                align-items: center;
                justify-content: center;
                color: #fd2645;
                font-size: .085rem;
            }
            .text{
                color: #333;
            }

        }
        .item-box{
            display: flex;
            width: 1.17755rem;
            background: #fd2645;
            align-items: center;
            justify-content: center;
            color: #fff;
            font-size: .128rem;
        }
    }
`

export const Price = border(styled.div`
    height: .41rem;
    padding: 0 .085335rem;
    display: flex;
    align-items: center;
    position: relative;
    .price{
        color: #fd2645;
        font-size: .19rem;
        margin: 0 .0896rem .0128rem .081065rem;
        .yuan{
            color: #fd2645;
            font-size: .11rem;
        }
    }
`)

