import { all, fork } from 'redux-saga/effects'
import { tmp } from './tmp'

function* rootSaga() {
  yield all([fork(tmp)])
}

export default rootSaga
