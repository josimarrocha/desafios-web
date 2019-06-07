'use strict'

import React from 'react'
import { connect } from 'react-redux'
import { closeCarrinho } from 'reducers/ui/action-creators'
import { incrementQntd, decrementQntd, deleteProdutoCarrinho } from 'reducers/carrinho/action-creators'

const Carrinho = ({
  produtosCarrinho,
  toggleCarrinho,
  closeCarrinho,
  incrementQntd,
  decrementQntd,
  deleteProduto
}) => (
    <div className='carrinhoContainer'
      style={{ transform: `translateX( ${toggleCarrinho.openCarrinho ? '0%' : '101%'})` }}>
      <header>
        <div className='fecha' onClick={closeCarrinho}>
          <span />
        </div>
      </header>
      <div className='produtosCarrinho'>
        <h1 className='title'>Produtos adicionados ao carrinho</h1>
        <ul className='produtoList'>
          {Object.keys(produtosCarrinho).map((item, index) => (
            <li className='produto' key={index}>
              <div className='deleteProduto'
                onClick={deleteProduto(produtosCarrinho[item].code)} />
              <img src={produtosCarrinho[item].imagem} alt="" />
              <div>
                <h2>{produtosCarrinho[item].nome}</h2>
                <label className='label'>{produtosCarrinho[item].preco_atual}</label><br />
                <label className='label'>QNTD:</label>
                <input className='inputQuantidade' type="text" value={produtosCarrinho[item].qntd} />
                <span className='incrementDecrement'
                  onClick={decrementQntd(produtosCarrinho[item].code)}>-
                  </span>
                <span className='incrementDecrement'
                  onClick={incrementQntd(produtosCarrinho[item].code)}>+
                </span><br />
                <ul>
                  <label className='label'>Tamanhos:</label>
                  {console.log(produtosCarrinho)}
                  {produtosCarrinho[item].sizes.map((item, i) => (
                    <li key={i}><a href="">{item.size}</a></li>
                  ))}
                </ul>
                <h2 style={{ float: 'right' }}>Total:
                  </h2>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )

const mapStateToProps = (state) => ({
  produtosCarrinho: state.carrinho,
  toggleCarrinho: state.ui
})

const mapDispatchToProps = (dispatch) => ({
  closeCarrinho: () => dispatch(closeCarrinho()),
  incrementQntd: (code) => () => dispatch(incrementQntd(code)),
  decrementQntd: (code) => () => dispatch(decrementQntd(code)),
  deleteProduto: (code) => () => dispatch(deleteProdutoCarrinho(code))
})

export default connect(mapStateToProps, mapDispatchToProps)(Carrinho)
