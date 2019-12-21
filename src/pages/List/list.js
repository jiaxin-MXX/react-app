import styled from 'styled-components'
import border from '../../compoment/border'
export const Wrap = styled.div`
    height:100%;
    display:flex;
    flex-direction:column;
    overflow:hidden;
`
export const TopWrap = border(styled.div`
    background:#fff;
    display: flex;
    .item{
        flex: 1;
        height: .375415rem;
        display: flex;
        align-items: center;
        justify-content: center;
        .text{
            color: #666;
            font-size: .11rem;
            padding: 0 .0384rem;
        }
    }
`)

export const Center = styled.div`
    flex:1;
    background: #fff;
    overflow-y: scroll;
    .product-box{
        display: flex;
        flex-wrap: wrap;
        padding: .110935rem .085335rem .085335rem;
        .item{
            width: 1.47625rem;
            margin-bottom: .0768rem;
            box-shadow: 0 0.026667rem 0.12rem 0 hsla(0,0%,40%,.28);
            border-radius: .066667rem;
            .a {
                text-decoration: none;
                display: block;
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
                        font-size: .09rem;
                        margin: .072535rem 0;
                        height: .245rem;
                        line-height: .1225rem;
                    }
                    .price{
                        display: flex;
                        align-items: center;
                        .price-sale {
                            color: #fd2645;
                            font-size: .09rem;
                        }
                        .price-original {
                            color: #999;
                            font-size: .085rem;
                            text-decoration: line-through;
                            margin-left: .0512rem;
                            margin-top: .017065rem;
                        }
                    }

                }
            }
            &:nth-of-type(odd) {
                margin-right: .0768rem;
            }

        }
        
    }
`
