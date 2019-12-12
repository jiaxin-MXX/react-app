import styled from 'styled-components'
import border from './border'
export const Top = border(styled.div`
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
`)