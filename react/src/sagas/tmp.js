import { takeLatest } from 'redux-saga/effects'
import { TMP_READ, tmpRead } from '../actions/tmp'

export function* tmp() {
  yield takeLatest(TMP_READ, tmpRead)
}
