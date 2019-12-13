import {takeEvery} from 'redux-saga/effects'
import getlist from 'pages/home/saga'
import getdata from 'pages/product/saga'
function* mySaga() {
  yield takeEvery("getlist", getlist);
  yield takeEvery("getdata", getdata);
}

export default mySaga;