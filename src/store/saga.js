import {takeEvery} from 'redux-saga/effects'
import getlist from 'pages/home/saga'
import {getonoff} from 'pages/search/saga'
import {searchlist} from 'pages/List/saga'
import {getdata,getExtend} from 'pages/product/saga'
function* mySaga() {
  yield takeEvery("getlist", getlist);
  yield takeEvery("getdata", getdata);
  yield takeEvery("Extend", getExtend);
  yield takeEvery("display", getonoff);
  yield takeEvery("searchfind", searchlist);
}

export default mySaga;