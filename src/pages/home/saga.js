import {put} from 'redux-saga/effects'
import {post} from 'utils/http'
function* getlist(action) {
   console.log(action)
   try {
      const result = yield post({
         url:action.url,
         headers:action.headers
      });
      // console.log(result)
      yield put({
         type: 'loadlist', 
         data:result , 
         imglist:result.pageElementItem1.pageChildElementItem,
         lunbo:[result.pageElementItem2.pageChildElementItem,result.pageElementItem3.pageChildElementItem],
         swiper:[result.pageElementItem4,result.pageElementItem5],
      });
   } catch (e) {}
}
export default getlist