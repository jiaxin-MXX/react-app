import {takeEvery} from 'redux-saga/effects'
import getlist from 'pages/home/saga'
function* mySaga() {
  yield takeEvery("getlist", getlist);
}
export default mySaga;