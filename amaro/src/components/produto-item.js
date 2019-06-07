'use strict'

import React from 'react'
import { connect } from 'react-redux'
import { addCarrinho } from 'reducers/carrinho/action-creators'
import { addTamanhos, removeTamanhos } from 'reducers/tamanhos/action-creators'

const Produto = ({
  id,
  name,
  image,
  atual,
  anterior,
  desconto,
  parcelas,
  tamanhos,
  cor,
  status,
  produtos,
  handleClick,
  addTamnho,
  removeTamanho,
  addTamanhoProdutos }) => (
    <div className="grid-3 produtos-item">
      <form action="" onSubmit={handleClick(id, produtos, addTamanhoProdutos)}>
        <div className='produtos-img'>
          <img src={image} alt="" />
          <p>{name}</p>
        </div>
        <div className="produtos-dados">
          <span className='valor-atual'>{atual}</span>
          <span className='desc'>{desconto ? `${desconto} OFF` : ''}</span>
          {desconto && <span className='valor-anterior'><strike>{anterior}</strike></span>}
          <p className='parcelas'>{parcelas}</p>
          <div className='tamanhos'>
            <h3>Tamanhos:</h3>
            <ul>
              {tamanhos.map((item, index) => (
                <li key={index}>
                  {item.available &&
                    <div>
                      <label htmlFor={item.sku} onClick={(e) => {
                        e.target.classList.toggle('action')
                        e.target.classList.contains('action') ? addTamnho(id, item) : removeTamanho(id, item.sku)
                      }}>
                        {item.size}
                      </label>
                    </div>
                  }
                </li>
              ))}
            </ul>
          </div>
          <h3 className='cor'>Cor: <span>{cor}</span></h3>
          <span className='error'>Adicione um tamanho!</span>
          <div className="status">
            {status && <h2>PROMOÇÃO</h2>}
            <button type='submit'
            // disabled={addTamanhoProdutos.length ? false : true}
            >
              Adicionar
            </button>
          </div>
        </div>
      </form>
    </div>
  )

const mapStateToProps = (state) => ({
  produtos: state.produtos,
  addTamanhoProdutos: state.tamanhos
})

const mapDispatchToProps = (dispatch) => ({
  addTamnho: (id, item) => dispatch(addTamanhos(id, item)),
  removeTamanho: (id, sku) => dispatch(removeTamanhos(id, sku)),
  handleClick: (id, produtos, addTamanhoProdutos) => (e) => {
    e.preventDefault()
    dispatch(addCarrinho(produtos[id], addTamanhoProdutos))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Produto)
