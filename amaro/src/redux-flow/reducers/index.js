'use strict'

import { combineReducers } from 'redux'
import produtos from './produtos/index'
import filter from './filter-produtos/index'
import carrinho from './carrinho/index'
import ui from './ui/index'

export default combineReducers({
  produtos,
  filter,
  carrinho,
  ui
})
