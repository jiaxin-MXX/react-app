import styled from 'styled-components'
import border from '../../compoment/border.js'
export const Search = styled.div`
    position:absolute;
    width:100%;
    height:100vh;
    overflow:hidden;
    background:#f4f4f4;
`
export const Top = border(styled.div`
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
    .cancel{
        margin-left: .093865rem;
        font-size: .12rem;
        color: #666;
    }
`)

export const Hot = styled.div`
    background: #fff;
    padding: .132265rem .085335rem .081065rem;
    margin-bottom: .085335rem;
    .hot{
        font-size: .12rem;
        margin-bottom: .128rem;
    }
    .search-content{
      display: flex;
        flex-wrap: wrap;
        .item{
            display: flex;
            font-size: .11rem;
            height: .221825rem;
            align-items: center;
            justify-content: center;
            padding: 0 .119465rem;
            background: #f4f4f4;
            border-radius: .1rem;
            margin: 0 .085335rem .085335rem 0;
        }
    }
`

export const His = styled.div`
    background: #fff;
    .line-box {
        height: .375415rem;
        justify-content: space-between;
        padding: 0 .085335rem;
        display: flex;
        align-items: center;
        .text {
            font-size: .12rem;
            color: #666;
        }
        .icon{
            width: .106615rem;
            height:.106615rem;
            img{
                width: .106615rem;
                height:.106615rem;
            }
        }
    }
` 


export const Find = styled.ul`
    height:100%;
    width: 100%;
    background: #fff;
    padding-left: .085335rem;
`

export const LL = border(styled.li`
    height: .337085rem;
    display: flex;
    align-items: center;
    font-size: .12rem;
    /* border-bottom: .013333rem solid #e0e0e0; */
`)
