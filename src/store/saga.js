import {takeEvery} from 'redux-saga/effects'
import getlist from 'pages/home/saga'
import {getdata,getExtend} from 'pages/product/saga'
function* mySaga() {
  yield takeEvery("getlist", getlist);
  yield takeEvery("getdata", getdata);
  yield takeEvery("Extend", getExtend);
}

export default mySaga;