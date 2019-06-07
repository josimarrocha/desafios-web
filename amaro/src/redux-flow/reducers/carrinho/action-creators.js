'use strict'

import { ADD_PRODUTO_CARRINHO, INCREMENT_QNTD, DECREMENT_QNTD, DELETE_PRODUTO_CARRINHO } from './actions'

export const addCarrinho = ({ nome, code, imagem, preco_atual }, tamanhos) => ({
  type: ADD_PRODUTO_CARRINHO,
  payload: {
    code,
    imagem,
    nome,
    preco_atual,
    qntd: tamanhos.filter(item => item.code === code).length,
    sizes: tamanhos.filter(item => item.code === code)
  }
})

export const incrementQntd = (code) => ({
  type: INCREMENT_QNTD,
  payload: {
    code
  }
})

export const decrementQntd = (code) => ({
  type: DECREMENT_QNTD,
  payload: {
    code
  }
})

export const deleteProdutoCarrinho = (code) => ({
  type: DELETE_PRODUTO_CARRINHO,
  payload: {
    code
  }
})
