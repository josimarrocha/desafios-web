'use strict'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducer from 'reducers'

export default ({ initialState } = {}) => {
  const enhancer = compose(applyMiddleware(thunk), logger())
  const store = createStore(reducer, initialState, enhancer)
  if (module.hot) {
    module.hot.accept('reducers', () => {
      const nextReducer = require('reducers').default
      store.replaceReducer(nextReducer)
    })
  }
  console.log(store.getState())
  return store
}

const logger = () => window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : (x) => x

// const logger = ({ dispatch, getState }) => (next) => (action) => {
//   console.group(`LOGGER -> ${action.type}`)
//   console.log('will dispatch:', action)
//   console.log('state:', getState())
//   const nextAction = next(action)
//   console.log('next state:', getState())
//   console.groupEnd(`LOGGER -> ${action.type}`)
//   return nextAction
// }
