import styled from 'styled-components'

export const Fenlei = styled.div`
    width:100%;
    flex:1;
    overflow:hidden;
    display:flex;
    flex-direction: column;
`
export const Center=styled.div`
    display:flex;
    height:100%;
    overflow:hidden;
    .category-nav{
        width: .853335rem;
        height: 100%;
        overflow-y: scroll;
        background: #f4f4f4;
        .item{
            width: 100%;
            height: .45224rem;
            display: flex;    
            justify-content: center;
            align-items: center;
            font-size: .11rem;
        }
        .active{
            background: #fff;
        }
    }
    .category-content{
        background:#fff;
        flex:1;
        overflow:hidden;
        overflow-y: scroll;
        .category-item{
            margin-bottom: .034135rem;
            .category-type{
                height: .41rem;
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 0 .085rem;
                .type-name{
                    font-size: .12rem;
                }
            }
            .category-scroll{
                width: 100%;
                overflow: hidden;
                padding:.042665rem .093865rem;
                .scrollwrap{
                    width: 100%;
                    overflow: hidden;
                    .bord{
                        width: fit-content;
                        box-shadow:0 0.026667rem 0.133333rem 0 hsla(0,0%,40%,.19);
                        display:flex;
                        .item{
                            width: .853335rem;
                            height: 1.1697rem;
                            padding-bottom:.042665rem;
                            background: #fff;
                            
                            img{
                                width:100%
                            }
                            .item-content {
                                text-align: center;
                                .name {
                                    color: #999;
                                    overflow: hidden;
                                    text-overflow: ellipsis;
                                    white-space: nowrap;
                                    padding: 0 .06rem;
                                    font-size: .1rem;
                                    margin-bottom: .042665rem;
                                }
                                .price-1{
                                    text-align: left;
                                    padding-left: .085335rem;
                                    .price{
                                        color: #ff2947;
                                        font-size: .09rem;
                                    }
                                }
                            }
                        }
                        .more{
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            color: #999;
                            font-size: .11rem;
                            background: #f4f4f4;
                            .iconfont {
                                color: #999;
                                font-size: .09rem;
                                margin-left: .0256rem;
                            }
                        }
                    }
                }
            }
        }
    }
`