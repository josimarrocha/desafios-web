'use strict'

import createReducer from '../createReducer'
import { ADD_TAMANHOS, REMOVE_TAMANHOS } from './actions'
const initialState = []

const tamanhos = createReducer(initialState, {
  [ADD_TAMANHOS]: (state, action) => state.concat({
    code: action.payload.code,
    size: action.payload.size,
    sku: action.payload.sku
  }),
  [REMOVE_TAMANHOS]: (state, action) => state.filter(item => item.sku !== action.payload.sku)
})

export default tamanhos

