'use strict'

import { SET_ON_SALE } from './actions'

export const filterOnSale = (action) => ({
  type: SET_ON_SALE,
  payload: { filter: action }
})
