import styled from 'styled-components'

export const Bottom = styled.div`
    display:flex;
    flex-direction:column;
    height:100%;
`
export const Nav = styled.ul`
    height:.477865rem;
    background:#fff;
    display:flex;
    .nav-list{
        flex: 1;
        text-align: center;
        .icon{
            display: block;
            width: .22rem;
            height: .22rem;
            margin: .081065rem auto .059735rem;
        }
        .name{
            font-size: .11rem;
            color:#333
        }
    }
`