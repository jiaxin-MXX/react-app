import {put} from 'redux-saga/effects'
function* getonoff(action) {
   console.log(action)
   try {
      // console.log(result)
      yield put({
         type: 'onoff', 
         data:action.data
      });
   } catch (e) {}
}


export default getonoff