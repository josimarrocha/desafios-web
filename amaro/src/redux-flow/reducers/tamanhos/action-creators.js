'use strict'

import { ADD_TAMANHOS, REMOVE_TAMANHOS } from './actions'

export const addTamanhos = (code, { sku, size }) => ({
  type: ADD_TAMANHOS,
  payload: {
    code,
    sku,
    size
  }
})

export const removeTamanhos = (code, sku) => ({
  type: REMOVE_TAMANHOS,
  payload: {
    code,
    sku
  }
})
