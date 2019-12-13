import {put} from 'redux-saga/effects'
import {postData} from 'utils/http'
function* getdata(action) {
   console.log(action)
   try{
      
      const result = yield postData({
         url:action.url,
         headers:action.headers,
         params:action.params
      });
    //   console.log(result)
      yield put({
         type: 'getproduct', 
         data:result
      });
   } catch (e) {}
}


export default getdata