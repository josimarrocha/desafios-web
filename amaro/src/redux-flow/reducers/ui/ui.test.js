'use strict'

import { expect } from 'chai'
import { CLOSE_CARRINHO, OPEN_CARRINHO } from './actions'
import ui from './index'

describe('User interface', () => {
  it('should ui to be a function', () => {
    expect(ui).to.be.a('function')
  })

  it('should return ui {openCarrinho: true}', () => {
    const before = { openCarrinho: false }
    const action = { type: OPEN_CARRINHO }
    const after = { openCarrinho: true }
    expect(ui(before, action)).to.be.deep.equal(after)
  })

  it('should return ui {openCarrinho: true}', () => {
    const before = { openCarrinho: true }
    const action = { type: CLOSE_CARRINHO }
    const after = { openCarrinho: false }
    expect(ui(before, action)).to.be.deep.equal(after)
  })

  it('should return value initial', () => {
    const before = undefined
    const action = {}
    const after = { openCarrinho: false }
    expect(ui(before, action)).to.be.deep.equal(after)
  })
})
