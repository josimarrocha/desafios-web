'use strict'

import React from 'react'
import ProdutoItem from 'components/produto-item'

const ProdutoList = () => (
  <section className='container'>
    <div className="produtos ">
      {Array.from({ length: 10 }).map((item, index) => (
        <div key={index}>
          <ProdutoItem />
        </div>
      ))}
    </div>

  </section>
)

export default ProdutoList
