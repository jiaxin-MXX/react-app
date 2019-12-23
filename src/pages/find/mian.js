import styled from 'styled-components'

export const Main = styled.div`
    overflow:hidden;
    flex:1;
    display: flex;
    flex-direction: column;
`

export const Hed = styled.div`
    height:.37544rem;
    background:#fff;
    .mint-header {
        height: .37544rem;
        background: #fff;
        padding: 0 .1536rem;
        display:flex;
        justify-content: center;
        align-items: center;
        .mint-header-title {
            color: #666;
            font-size: .12rem;
            padding: .042665rem 0;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            font-size: inherit;
            font-weight: 400;
            flex: 1;
            text-align:center;
        }
        h1{
            margin:0
        }
    }
`

export const Cen = styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
    overflow-y:scroll;
    background: #fff;
`
export const List = styled.div`
    img {
        width: 100%;
    }
    .content-text {
        text-align: center;
        padding: .162135rem 0;
        h3 {
            font-size: .145rem;
            margin-bottom: .106665rem;
        }
        .content-p{
            font-size: .12rem;
        }
    }
`