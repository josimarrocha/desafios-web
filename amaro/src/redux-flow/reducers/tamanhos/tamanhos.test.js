'use strict'

import { expect } from 'chai'
import { ADD_TAMANHOS, REMOVE_TAMANHOS } from './actions'
import tamaho from './index'

describe('Tamanhos', () => {
  it('Should tamanho to be a function', () => {
    expect(tamaho).to.be.a('function')
  })

  it('should add tamanho', () => {
    const before = []
    const action = {
      type: ADD_TAMANHOS,
      payload: {
        code: 1,
        size: 'p',
        sku: '15564_P'
      }
    }
    const after = [
      { code: 1, size: 'p', sku: '15564_P' }
    ]
    expect(tamaho(before, action)).to.be.deep.equal(after)
  })

  it('should add new tamanho', () => {
    const before = [{ code: 1, size: 'P', sku: '15564_P' }]
    const action = {
      type: ADD_TAMANHOS,
      payload: {
        code: 2,
        size: 'M',
        sku: '155d1_M'
      }
    }
    const after = [
      { code: 1, size: 'P', sku: '15564_P' },
      { code: 2, size: 'M', sku: '155d1_M' }
    ]
    expect(tamaho(before, action)).to.be.deep.equal(after)
  })

  it('should remove item tamanho', () => {
    const before = [
      { code: 1, size: 'P', sku: '15564_P' },
      { code: 2, size: 'M', sku: '155d1_M' }
    ]
    const action = {
      type: REMOVE_TAMANHOS,
      payload: {
        code: 2,
        size: 'M',
        sku: '155d1_M'
      }
    }
    const after = [
      { code: 1, size: 'P', sku: '15564_P' }
    ]
    expect(tamaho(before, action)).to.be.deep.equal(after)
  })

  it('should return value initial', () => {
    const before = undefined
    const action = {}
    const after = []
    expect(tamaho(before, action)).to.be.deep.equal(after)
  })
})
