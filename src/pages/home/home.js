import styled from 'styled-components'
export const Top = styled.div`
    height: .3754rem;
    padding: .064rem .260265rem;
    display: block;
    background: #fff;
    .search-cont{
        background: #f5f5f5;
        display: flex;
        border-radius: .033333rem;
        width: 100%;
        height: 100%;
        align-items: center;
        justify-content: center;
        color: #999;
        font-size: .11rem;
        svg{
            margin-right:.08rem
        }
    }
`
export const SwiperWrap = styled.div`
    height:37.5vw;
    .slider {
        height:100% !important;
        .slider-frame{
            height:100% !important;
        }
    }
    li{
        height:100% !important;
        img {
            width: 100%;
        }
    }  
`
export const GongWrap = styled.div` 
    display: flex;
    text-align: center;
    padding: .1536rem 0;
    background: #fff;
    margin-bottom:.085335rem;
    .item{
        flex: 1;
        .item-img{
            width: .375415rem;
            margin: 0 .21229rem;
            img{
                width:100%
            }
        }
        .item-text{
                margin-top:.0896rem;
                color: #333;
                font-size:.12rem
        }
    }
`
export const IngetralWrap = styled.div`
    min-height:0.458204vh;
    margin-bottom: .133333rem;
    .integral-img{
        position: relative;
        .bg{
            position: absolute;
            width: 100%;
            height: 100%;
            background: #0000003d;
        }
        .responImg {
            width: 100%;
            display: block;
            border: none;
        }
        .content{
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            align-items: center;
            text-align: center;
            .title{
                color: #fff;
                display: -ms-flexbox;
                display: flex;    
                justify-content: center;
                align-items: center;
                margin-top: .379735rem;
                font-size: .14rem;
                .more{
                    margin-left:.059735rem;
                }
            }
            .text{
                color: #fff;
                text-align: center;
                margin-top: .098135rem;
            }
        }
    }
    .HDwrap{
            width:100%;
            overflow:hidden;
            margin-top:-0.256rem;
            .letscroll{
                width:fit-content;
                display:flex;
                position: relative;
                padding:0.072535rem;
                z-index:1;
                .item{
                    width: 1.0837rem!important;
                    background: #fff;
                    padding-bottom: 0.042665rem;
                    height: 1.45067rem;
                    margin-right: -0.042665rem;
                    flex-shrink: 0;
                    .item-content{
                        text-align:center;
                        .name{
                            color: #999;
                            font-size: .11rem;
                            margin-bottom: .064rem;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                            padding: 0 0.059735rem;
                        }
                        .price{
                            color: #fd2645;
                            font-size:.12rem;
                        }
                        .integral{
                            color:#333;
                            font-size:.12rem;
                        }
                    }
                    img{
                        width:100%
                    }
                }
                .more{
                    text-align:center;
                    display: flex;
                    background: #f4f4f4;
                    align-items: center;
                    a{
                        width:100%;
                        text-align:center;
                        font-size:.11rem;
                        color:#999
                    }
                }
            }
        }
`
export const Slidewrap = styled.div`
    background: #fff;
    margin-bottom: .085335rem;
    .category{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 0.413855rem;
        font-size: .12rem;
        font-weight: 500;
    }
    .swiper-container{
        width:100%
    }
    .product-box {
        padding: .021335rem .068625rem .298665rem;
        .swiper-wrapper {
            width:fit-content;
            display:flex;
            flex-wrap: wrap;
            flex-direction:column;
            height: 143vw;
            .swiper-slide {
                flex-shrink: 0;
                width: 100%;
                height:auto;
                position: relative;
                transition-property: transform;
            }
            .item {
                box-shadow: 0 0.026667rem 0.12rem 0 hsla(0,0%,40%,.28);
                border-radius: .033333rem;
                width: 1.46rem;
                height: 66.66667vw;
                margin-bottom: .0678rem;
                /* margin-right: .05rem; */
                .item-img {
                    background: #f4f4f4;
                    border-radius: .033333rem .033333rem 0 0;
                    img{
                        width: 100%;
                    }
                }
                .item-info {
                    padding: .1152rem .0896rem;
                    .title {
                        font-size: .11rem;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        font-weight: 400;
                    }
                    .intro {
                        color: #999;
                        font-size: .1rem;
                        margin: .072535rem 0;
                    }
                    .price-sale {
                        color: #fd2645;
                        font-size: .1rem;
                    }
                    .price-original {
                        color: #999;
                        font-size: .07rem;
                        text-decoration: line-through;
                        margin-left: .0512rem;
                    }
                }
            }
        }
        .my-bullet-active{
            background: #ff6600;
            opacity: 1;
        }
    }
`

export const GonggaoWrap = styled.div`
    background: #fff;
    padding: .068265rem;
    .zone-integral{
        background: #ecf0f3;
        margin-top: .068265rem;
        height: 1.058125rem;
        border-radius: .03333rem;
        .contents{
            display: flex;
            justify-content: space-between;
            padding: .157865rem .1024rem .1024rem .149335rem;
            height: .81489rem;
            box-sizing: content-box;
            .content-name{
                    font-size: .13rem;
                    font-weight: 600;
                    margin-bottom: .072535rem;
                }
                .content-text{
                    color: #999;
                }
                img{
                    width: 1.27146rem;
                    margin: auto;
                    margin-right: 0;
                }
        }
    }
    .zone-combo{
        display: flex;
        .left{
            flex:1;
            background: #ecf0f3;
            border-radius: .033333rem;
            .contents{
                padding: .157865rem 0.1024rem 0.1024rem .149335rem;
                height: 0.81489rem;
                display: flex;
                justify-content: space-between;
                box-sizing: content-box;
                .content-name{
                    font-size: .13rem;
                    font-weight: 600;
                    margin-bottom: .072535rem;
                }
                .content-text{
                    color: #999;
                }
                .content-img{
                    border:0;
                    img{
                        border:0;
                        width: .810625rem;
                        height: .810625rem;
                        margin: auto;
                        margin-right: 0;
                    }
                    img[src=""],img:not([src]){
                        opacity:0;
                    }
                }
            }
        }
        .right{
            width:1.126355rem;
            background: #fbf8f1;
            margin-left: .068265rem;
            border-radius: .033333rem;
            .content {
                padding: .157865rem .1024rem .1024rem .149335rem;
                height: .81489rem;
                display:block;
                box-sizing: content-box;
                .content-name{
                    font-size: .13rem;
                    font-weight: 600;
                    margin-bottom: .072535rem;
                }
                img{
                        margin-top: .106665rem;
                        width:100%
                    }
            }
        }
    }
    
`
export const Zhezhao=styled.div`
    position:absolute;
    width:100vw;
    height:100vh;
    background:rgba(0,0,0,.9);
    z-index:1;
    .close{
        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding: .196265rem .145065rem 0 0;
        span{
            width:.14078rem;
            height:.14078rem;
            font-size:.14078rem;
            color:#ccc
        }
    }
    video{
        position: absolute;
        top: 27%
    }
`

export const ShowWrap = styled.ul`
    padding: .0896rem;
    .item{
        box-shadow: 0 0.026667rem 0.133333rem 0 hsla(0,0%,40%,.28);
        background: #fff;
        border-radius: .033333rem;
        margin-bottom: .068265rem;
        .item-product{
            .Adiv{
                display: flex;
                .product-img{
                    width: .957395rem;
                    img{
                        width: 100%;
                    }
                }
                .product-info{
                    padding: .0896rem;
                    flex: 1;
                    .title{
                        font-size: .11rem;
                        font-weight: 400;
                        line-height: .16rem;
                        height: .31573rem;
                        overflow: hidden;
                        -webkit-line-clamp: 2;
                        -webkit-box-orient: vertical;
                        display: -webkit-box;
                        text-overflow: ellipsis;
                    }
                    .intro{
                        color: #999;
                        font-size: .09rem;
                        margin: .0896rem 0;
                        span{
                            display:block
                        }
                    }
                    .price-sale{
                        color: #fd2645;
                        font-size: .1rem;
                    }
                }
            }
        }
        .item-other{
            display: flex;
            align-items: center;
            justify-content: space-between;
            height: .409585rem;
            padding: 0 .068265rem;
            .other-left{
                display: flex;
                align-items: center;
                .type{
                    padding: .0384rem .064rem;
                    color: #999;
                    border-radius: 30%;
                    background: #f4f4f4;
                    font-size: .093865rem;
                    margin-right: .083865rem;
                }
            }
            .other-right{
                display: flex;
                align-items: center;
                justify-content: center;
                border: 1px solid #fd2645;
                border-radius: .2rem;
                color: #fd2645;
                background: #fff;
                width: .469375rem;
                height: .17927rem;
            }
        }
    }
`