'use strict'

import React from 'react'

const Produto = ({
  name,
  image,
  atual,
  anterior,
  desconto,
  parcelas,
  tamanhos,
  cor,
  status }) => (
    <div className="grid-3 produtos-item">
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
              <li><a href="">{item.size}</a></li>
            ))}
          </ul>
        </div>
        <h3 className='cor'>Cor: <span>{cor}</span></h3>
        <div className="status">
          {status && <h2>Indisponivel</h2>}
          <a href="">Adicionar</a>
        </div>
      </div>
    </div>
  )

export default Produto
