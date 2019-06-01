'use strict'

import React from 'react'

const Produto = () => (
  <div className="grid-3 produtos-item">
    <div className='produtos-img'>
      <img src="./img-produto.png" alt="" />
      <p>VESTIDO TRANSPASSE BOW</p>
    </div>
    <div className="produtos-dados">
      <span className='valor-atual'>R$ 19,90</span>
      <span className='desc'>50% off</span>
      <span className='valor-anterior'><strike>R$ 19,90</strike></span>
      <p className='parcelas'>3x R$ 66,63 sem juros</p>
      <div className='tamanhos'>
        <h3>Tamanhos:</h3>
        <ul>
          <li><a href="">P</a></li>
          <li><a href="">M</a></li>
          <li><a href="">G</a></li>
        </ul>
      </div>
      <h3 className='cor'>Cores: <span>preto</span></h3>
      <div className="status">
        <h2>Indisponivel</h2>
        <a href="">Adicionar</a>
      </div>
    </div>
  </div>
)

export default Produto
