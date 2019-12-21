import {put} from 'redux-saga/effects'
import {post2} from 'utils/http'
export function* searchlist(action) {
   try {
      const result = yield post2({
         url:action.url,
         headers:action.headers,
         data:action.data,
      });
      yield put({
         type: 'searchlist', 
         data:result , 
      });
   } catch (e) {}
}


