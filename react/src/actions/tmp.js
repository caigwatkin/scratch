import { call, put } from 'redux-saga/effects'
import { StatusCodes } from 'http-status-codes'
import { tmpGet } from '../apis/tmp'

export const TMP_READ = 'TMP_READ'
export const TMP_READ_FAILURE = 'TMP_READ_FAILURE'
export const TMP_READ_PENDING = 'TMP_READ_PENDING'
export const TMP_READ_SUCCESS = 'TMP_READ_SUCCESS'

export function* tmpRead() {
  try {
    yield put({
      type: TMP_READ_PENDING,
    })

    const response = yield call(tmpGet)

    if (!response || response.status !== StatusCodes.OK) {
      throw response
    }

    yield put({
      type: TMP_READ_SUCCESS,
    })
  } catch (e) {
    console.error(TMP_READ_FAILURE, e)
    yield put({
      type: TMP_READ_FAILURE,
    })
  }
}
