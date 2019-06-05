'use strict'

import { CLOSE_CARRINHO, OPEN_CARRINHO } from './actions';
import createReducer from '../createReducer'
const initialState = {
  openCarrinho: false
}

const ui = createReducer(initialState, {
  [OPEN_CARRINHO]: (state, action) => ({
    ...state,
    openCarrinho: true
  }),
  [CLOSE_CARRINHO]: (state, action) => ({
    ...state,
    openCarrinho: false
  })
})

export default ui
