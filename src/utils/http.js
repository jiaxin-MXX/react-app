import axios from 'axios'
export const post = async function({url,headers}){
    let result = await axios({
        url,
        method:'post',
        headers
    })
    return result.data.result
}

export const postData = async function({url,headers,params}){
    let result = await axios({
        url,
        method:'post',
        headers,
        params
    })
    return result.data.result
}
