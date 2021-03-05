import { combineReducers } from 'redux'
import tmp from './tmp'

const combinedReducer = combineReducers({
  tmp: tmp,
})

const rootReducer = (state, action) => {
  return combinedReducer(state, action)
}

export default rootReducer
