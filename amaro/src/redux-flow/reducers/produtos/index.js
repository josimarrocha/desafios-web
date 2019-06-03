'use strict'

import createReducer from '../createReducer'
import { ADD_PRODUTO } from './actions'

const initialState = []

const Produto = createReducer(initialState, {
  [ADD_PRODUTO]: (state, action) => ({
    ...state,
    [action.payload.code_color]: {
      code: action.payload.code_color,
      imagem: action.payload.image,
      nome: action.payload.name,
      preco_regular: action.payload.regular_price,
      preco_atual: action.payload.actual_price,
      disponivel: action.payload.on_sale,
      promocao: action.payload.discount_percentage,
      parcelas: action.payload.installments,
      color: action.payload.color,
      sizes: action.payload.sizes
    }
  })
})

export default Produto
