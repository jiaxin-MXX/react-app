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


export const Coun = styled.div`
    background: #fff;
    margin-bottom: .085335rem;
    .opera-cho{
        padding: 0 .085335rem;
        .model{
            display: flex;
            padding: .1194665rem 0;
            align-items: center;
            justify-content: space-between;
            .model-name{
                color: #666;
                font-size: .12rem;
                margin-right: .247465rem;
            }
            .number{
                width: .751rem;
                height: .2133rem;
                border-radius: .166667rem;
                border: 1px solid #d0d0d0;
                display: flex;
                align-items: center;
                justify-content: center;
                .items{
                    text-align: center;
                    height: 100%;
                    width: .20856rem;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    &:nth-of-type(2) {
                        border-left: 1px solid #d0d0d0;
                        border-right: 1px solid #d0d0d0;
                        width: .325375rem;
                        font-size: .11rem;
                    }
                }
            }
        }
    }
    .product-adv{
        display: flex;
        height: .37544rem;
        align-items: center;
        padding: 0 .0896rem;
        .item{
            display: flex;
            width: .58875rem;
            margin-right: .136rem;
            justify-content: center;
            align-items: center;
            font-size: .1rem;
            color: #999;
            img{
                width: .128rem;
                margin-right: .042665rem;
            }
            &:last-child {
                flex: 1;
                margin-right: 0;
            }
        }
    }
`


export const Eval = styled.div`
    background: #fff;
    margin-bottom: .085335rem;
    .line-box {
        height: .37544rem;
        justify-content: space-between;
        padding: 0 .085335rem;
        display: flex;
        align-items: center;
        .content-left {
            display: flex;
            align-items: center;
            .text {
                font-size: .12rem;
                color: #666;
            }
        }
        .content-right {
            display: flex;
            align-items: center;
            .text {
                margin-right: 0;
                color: #fd2645;
                font-size: .11rem;
            }
            .iconfont {
                color: #999;
                font-size: .11rem;
            }
        }
    }
    .scrollWrap{
        width:100%;
        overflow:hidden;
    }
    .evaluation{
        white-space: nowrap;
        position: relative;
        width: fit-content;
        .item{
            display: inline-block;
            width: .938625rem;
            height: .938625rem;
            margin-right: .085335rem;
            position: relative;
            .item-img{
                display:block;
                position: relative;
                background: #f4f4f4;
                width: 100%;
                height: 100%;
                border-radius: .033333rem;
                overflow: hidden;
                img {
                    width: 100%;
                    transform: translateY(-50%);
                    position: absolute;
                    top: 50%;
                }
            }
            .count{
                position: absolute;
                top: .0426665rem;
                right: .0426665rem;
                width: .213315rem;
                height: .106625‬rem;
                background: #fff;
                border-radius: .16rem;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: .085rem;
            }
            &:first-child {
                margin-left: .085335rem;
            }
        }
    }
`


export const Combo = styled.div`
    background: #fff;
    margin-bottom: .085335rem;
    .swiper-slide{
        box-sizing: content-box;
        width: 84.34782vw !important;
        height: 1.4805rem;
        background: #fff;
        box-shadow: 0 0.026667rem 0.133333rem 0 hsla(0,0%,40%,.28);
        border-radius: .033333rem;
        padding: 0 .0896rem;
        margin-right:.08rem;
    }
    .swiper-wrapper{
        padding: 0 .068265rem .196265rem;
    }
    .swiper-pagination{
        bottom: 0px !important;
    }
    .recommend{
        text-align: center;
        font-size: .12rem;
        padding: .128rem 0;
        font-weight: 500;
    }
    .slide-top{
            display: flex;
            justify-content: space-between;
            height: .384rem;
            align-items: center;
            .head{
                display: flex;
                justify-content: space-between;
                height: .384rem;
                align-items: center;
                .name{
                    font-size: .11rem;
                    margin-right: .098135rem;
                }
                .price{
                    font-size: .115rem;
                    color: #ff4259;
                    font-weight: 500;
                    margin-right: .072535rem;
                    margin-top: .021335rem;
                    .yuan{
                        font-size: .09rem;
                        color: #ff4259;
                    }
                }
                .price-original{
                    color: #999;
                    font-size: .1rem;
                    text-decoration: line-through;
                    margin-right: .09813rem;
                    .yuan{
                        color: #999;
                        font-size: .09rem;
                    }
                }
                .save{
                    font-size: .11rem;
                }
            }
            .btn-red{
                width: .537625rem;
                height: .19631rem;
                background: #fd2645;
                border-radius: .033333rem;
                display: flex;
                align-items: center;
                justify-content: center;
                color: #fff;
                font-size: .11rem;
            }
        }
        .slide-main{
            height: 1.01119rem;
            background: #fff;
            border: 1px solid #e0e0e0;
            display: flex;
            .item{
                flex: 1;
                width: 25%;
                .a{
                    display:block;
                    .item-img{
                        width: 100%;
                        img{
                            width: .618625rem;
                            margin: auto;
                        }
                    }
                    .item-content{
                        padding: 0 .059735rem;
                        .name{
                            color: #999;
                            font-size: .1rem;
                            margin-bottom: .064rem;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                        }
                        .price{
                                color: #fd2645;
                        }
                    }
                }
            }
        }
`


export const Article = styled.div`
    background: #fff;
    margin-bottom: .085335rem;
    .line-box{
        height: .486375rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 .085335rem;
        .content-left {
            display: flex;
            align-items: center;
            .text {
                font-size: .11rem;
                color: #666;
            }
        }
        .content-right {
            display: flex;
            align-items: center;
        }
    }
    .waterfall{
        width:100%;
        overflow:hidden;
        display: block;
        white-space: nowrap;
        .showScroll{
            width:fit-content;
        }
        .item{
            display: inline-block;
            width: 1.28rem;
            margin-bottom: .162135rem;
            box-shadow: none;
            margin-right: .085335rem;
            border-radius: 0;
            vertical-align: top;
            img {
                width: 100%;
                display: block;
                border: none;
            }
            &:first-child {
                margin-left: .085335rem;
            }
            .item-info{
                border: 1px solid #f0f0f0;
                border-top: none;
                border-radius: 0 0 .2rem .2rem;
                padding: .1024rem .0896rem .110935rem;
                .block-cont{
                    display: flex;
                    align-items: center;
                    margin-bottom: .098135rem;
                    .head-photo{
                        width: .19625rem;
                        img{
                            width: 100%;
                            border-radius:50%;
                        }
                    }
                    .account{
                        width: .546125rem;
                        margin-left: .085335rem;
                    }
                }
                .name{
                    white-space: normal;
                    height: .30719rem;
                    font-size: .11rem;
                    line-height: .15rem;
                    -webkit-line-clamp: 2;
                    overflow: hidden;
                }
            }
        }
    }
`


export const ImgShow = styled.div`
    img{
        width:100%
    }
`

export const TitleShow = styled.div`
    padding: .085335rem;
    h4{
        text-align:center;
        font-size:.18rem;
    }
    p{
        span{
            font-size:.18rem;
            color: #666666;
            display:block
        }
    }
`