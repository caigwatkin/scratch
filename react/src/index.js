import App from './components/app'
import { applyMiddleware, createStore } from 'redux'
import { BrowserRouter } from 'react-router-dom'
import createSagaMiddleware from 'redux-saga'
import { logger } from 'redux-logger'
import { Provider } from 'react-redux'
import React from 'react'
import ReactDOM from 'react-dom'
import reportWebVitals from './reportWebVitals'
import rootReducer from './reducers/rootReducer'
import rootSaga from './sagas/rootSaga'

const sagaMiddleware = createSagaMiddleware()

const reduxMiddleware = [sagaMiddleware, logger]

const store = createStore(rootReducer, applyMiddleware(...reduxMiddleware))

sagaMiddleware.run(rootSaga)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,

  document.getElementById('root')
)

reportWebVitals()
