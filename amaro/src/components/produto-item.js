'use strict'

import React from 'react'
import { connect } from 'react-redux'
import { addCarrinho } from 'reducers/carrinho/action-creators'

let tamanhos = []
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
  handleClick }) => (
    <div className="grid-3 produtos-item">
      <form action="" onSubmit={handleClick(id, produtos)}>
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
                      <label htmlFor={item.sku}
                        onClick={(e) => { e.target.classList.toggle('action') }}>
                        {item.size}
                      </label>
                      <input type="checkbox" style={{ display: 'none' }} name="check" value={item.size} id={item.sku} />
                    </div>

                  }
                </li>
              ))}
            </ul>
          </div>
          <h3 className='cor'>Cor: <span>{cor}</span></h3>
          <div className="status">
            {status && <h2>PROMOÇÃO</h2>}
            <button type='submit'>Adicionar</button>
          </div>
        </div>
      </form>
    </div>
  )

const mapStateToProps = (state) => ({
  produtos: state.produtos
})

const mapDispatchToProps = (dispatch) => ({
  handleClick: (id, produtos) => (e) => {
    e.preventDefault()
    const teste = Array.prototype.filter.call(e.target.check, function (item) {
      return item.checked === true
    })
    const tamanhos = teste.map(item => ({
      code: item.id,
      tamanho: item.value
    }))
    dispatch(addCarrinho(produtos[id], tamanhos))
    console.log(produtos[id])
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Produto)
