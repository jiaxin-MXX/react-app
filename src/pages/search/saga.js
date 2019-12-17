import {put} from 'redux-saga/effects'
export function* getonoff(action) {
   try {
      yield put({
         type: 'onoff', 
         onoff:action.onoff, 
      });
   } catch (e) {}
}
