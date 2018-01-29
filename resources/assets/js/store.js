import { Map, Iterable } from 'immutable'
import createHistory from 'history/createBrowserHistory'
import { createStore, applyMiddleware } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import { createLogger } from 'redux-logger'
import ReduxThunk from 'redux-thunk'
import rootReducer from './modules/rootReducer'

export const history = createHistory()

const middlewares = [ReduxThunk, routerMiddleware(history)]

// in dev mode
if (process.env.NODE_ENV === 'development') {
  const logger = createLogger({
    // immutable accessor
    stateTransformer: state =>
      (Iterable.isIterable(state) ? state.toJS() : state)
  })
  middlewares.push(logger)
}

export const store = createStore(
  rootReducer,
  Map(),
  applyMiddleware(...middlewares)
)
