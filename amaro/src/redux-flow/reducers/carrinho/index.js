'use strict'

import { ADD_PRODUTO_CARRINHO } from './actions'
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
  })
})

export default carrinhoProduto
