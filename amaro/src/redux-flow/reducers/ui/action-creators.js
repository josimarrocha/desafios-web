'use strict'

import { CLOSE_CARRINHO, OPEN_CARRINHO } from './actions'

export const openCarrinho = () => ({
  type: OPEN_CARRINHO
})

export const closeCarrinho = () => ({
  type: CLOSE_CARRINHO
})
