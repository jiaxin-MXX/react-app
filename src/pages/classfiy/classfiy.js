import styled from 'styled-components'
export const Fenlei = styled.div`
    width:100%;
    flex:1;
    overflow:hidden;
    display:flex;
    flex-direction: column;
`
export const Center=styled.div`
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
`