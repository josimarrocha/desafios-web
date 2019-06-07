'use strict'

import { ADD_PRODUTO_CARRINHO, INCREMENT_QNTD, DECREMENT_QNTD, DELETE_PRODUTO_CARRINHO } from './actions'
import createReducer from 'reducers/createReducer'

const initialState = {}
const carrinhoProduto = createReducer(initialState, {
  [ADD_PRODUTO_CARRINHO]: (state, action) => ({
    ...state,
    [action.payload.code]: {
      code: action.payload.code,
      imagem: action.payload.imagem,
      nome: action.payload.nome,
      preco_atual: action.payload.preco_atual,
      qntd: action.payload.qntd,
      sizes: action.payload.sizes
    }
  }),
  [DELETE_PRODUTO_CARRINHO]: (state, action) => {
    let { [action.payload.code]: teste, ...newState } = state
    return newState
  },

  [INCREMENT_QNTD]: (state, action) => ({
    ...state,
    [action.payload.code]: {
      ...state[action.payload.code],
      qntd: state[action.payload.code].qntd + 1
    }
  }),

  [DECREMENT_QNTD]: (state, action) => ({
    ...state,
    [action.payload.code]: {
      ...state[action.payload.code],
      qntd: state[action.payload.code].qntd - 1
    }
  })
})

export default carrinhoProduto
