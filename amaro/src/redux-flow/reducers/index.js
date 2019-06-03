'use strict'

import { combineReducers } from 'redux'
import produtos from './produtos/index'
import filter from './filter-produtos/index'

export default combineReducers({
  produtos,
  filter
})
