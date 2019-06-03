'use strict'

import { expect } from 'chai'
import filter from './index'
import { SET_ON_SALE, SHOW_ALL, SHOW_ON_SALE } from './actions'

describe('Filter produtos', () => {
  it('should filter to be a function', () => {
    expect(filter).to.be.a('function')
  })

  it('should return products on sale', () => {
    const before = SHOW_ALL
    const action = {
      type: SET_ON_SALE,
      payload: {
        filter: SHOW_ON_SALE
      }
    }
    const after = SHOW_ON_SALE
    expect(filter(before, action)).to.be.equal(after)
  })

  it('should return all products', () => {
    const before = SHOW_ON_SALE
    const action = {
      type: SET_ON_SALE,
      payload: {
        filter: SHOW_ALL
      }
    }
    const after = SHOW_ALL
    expect(filter(before, action)).to.be.equal(after)
  })
})
