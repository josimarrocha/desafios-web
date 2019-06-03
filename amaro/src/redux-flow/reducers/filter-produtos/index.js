'use strict'

import createReducer from '../createReducer'
import { SHOW_ALL, SET_ON_SALE, SHOW_ON_SALE } from './actions'

const initialState = SHOW_ALL
const filter = createReducer(initialState, {
  [SET_ON_SALE]: (_, action) => {
    return action.payload.filter
  }
})

export default filter
