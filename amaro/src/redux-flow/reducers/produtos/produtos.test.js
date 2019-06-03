'use strict'

import { expect } from 'chai'
import produtos from './index'
import { ADD_PRODUTO } from './actions'

describe('Produtos', () => {
  it('should produtos to be a function', () => {
    expect(produtos).to.be.a('function')
  })

  it('should add produto when use action.type equal ADD_PRODUTO', () => {
    const before = {}
    const action = {
      type: ADD_PRODUTO,
      payload: {
        code_color: 1,
        image: 'http://image.com',
        name: 'josimar',
        regular_price: 'R$ 19,90',
        actual_price: 'R$ 15,90',
        on_sale: true,
        discount_percentage: '50%',
        installments: '2x R$ 7,95',
        color: 'PRETO',
        sizes: []

      }
    }
    const after =
    {
      '1': {
        code: 1,
        imagem: 'http://image.com',
        nome: 'josimar',
        preco_regular: 'R$ 19,90',
        preco_atual: 'R$ 15,90',
        disponivel: true,
        promocao: '50%',
        parcelas: '2x R$ 7,95',
        color: 'PRETO',
        sizes: []

      }
    }
    expect(produtos(before, action)).to.be.deep.equal(after)
  })

  it('should add a new produto when use action.type equal ADD_PRODUTO', () => {
    const before = {
      '1': {
        code: 1,
        imagem: 'http://image.com',
        nome: 'josimar',
        preco_regular: 'R$ 19,90',
        preco_atual: 'R$ 15,90',
        disponivel: true,
        promocao: '50%',
        parcelas: '2x R$ 7,95',
        color: 'PRETO',
        sizes: []
      }
    }

    const action = {
      type: ADD_PRODUTO,
      payload: {
        code_color: 2,
        image: 'http://image.com',
        name: 'josimar',
        regular_price: 'R$ 19,90',
        actual_price: 'R$ 15,90',
        on_sale: true,
        discount_percentage: '50%',
        installments: '2x R$ 7,95',
        color: 'PRETO',
        sizes: []

      }
    }

    const after =
    {
      '1': {
        code: 1,
        imagem: 'http://image.com',
        nome: 'josimar',
        preco_regular: 'R$ 19,90',
        preco_atual: 'R$ 15,90',
        disponivel: true,
        promocao: '50%',
        parcelas: '2x R$ 7,95',
        color: 'PRETO',
        sizes: []
      },
      '2': {
        code: 2,
        imagem: 'http://image.com',
        nome: 'josimar',
        preco_regular: 'R$ 19,90',
        preco_atual: 'R$ 15,90',
        disponivel: true,
        promocao: '50%',
        parcelas: '2x R$ 7,95',
        color: 'PRETO',
        sizes: []
      }
    }
    expect(produtos(before, action)).to.be.deep.equal(after)
  })
})
