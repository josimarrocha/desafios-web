'use strict'

import { ADD_PRODUTO } from './actions'
import produtos from '../../../../produtos'

export const addProduto = ({
  name,
  color,
  on_sale,
  regular_price,
  code_color,
  actual_price,
  discount_percentage,
  installments,
  image,
  sizes
}) => ({
  type: ADD_PRODUTO,
  payload: {
    name,
    color,
    code_color,
    on_sale,
    regular_price,
    actual_price,
    discount_percentage,
    installments,
    image,
    sizes
  }
})

export const fetchProdutos = () => (dispatch) => {
  produtos.products.forEach((produto) => {
    dispatch(addProduto(produto))
  })
}
