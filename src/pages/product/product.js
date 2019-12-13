import styled from 'styled-components'
import border from '../../compoment/border'
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
    .product-price{
        height: .41rem;
        padding: 0 .085335rem;
        display: flex;
        align-items: center;
        position: relative;
        .price{
            color: #fd2645;
            font-size: .19rem;
            margin: 0 .0896rem .0128rem .081065rem;
            .yuan[data-v-172ec816] {
                color: #fd2645;
                font-size: .346667rem;
            }
        }
    }
`