'use strict'

import { ADD_PRODUTO_CARRINHO } from './actions'

export const addCarrinho = ({ nome, code, imagem, preco_atual }, tamanhos) => ({
  type: ADD_PRODUTO_CARRINHO,
  payload: {
    code,
    imagem,
    nome,
    preco_atual,
    qntd: tamanhos.length,
    sizes: tamanhos
  }
})
