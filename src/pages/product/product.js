import styled from 'styled-components'

export const Wrap = styled.div`
    height:100%;
    overflow:hidden;
    display:flex;
    flex-direction:column;
    .head-box{
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
    }
`