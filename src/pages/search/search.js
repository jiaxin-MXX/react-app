import styled from 'styled-components'

export const Search = styled.div`
    position:absolute;
    width:100%;
    height:100vh;
    overflow:hidden;
    background:#fff;
`
export const Top = styled.div`
    display: flex;
    height: .375415rem;
    justify-content: center;
    align-items: center;
    padding: 0 .085335rem;
    background: #fff;
    .mint-cell{
        background:#f4f4f4;
        margin-bottom: 0;
        height: .24745rem;
        display:flex;
        align-items:center;
        flex: 1;
        .mint-field-core{
            flex:1;
            background: #f4f4f4;
            height:100%;
            border:none;
        }
    }
`
