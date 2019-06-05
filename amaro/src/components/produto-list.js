'use strict'

import React from 'react'
import { connect } from 'react-redux'
import ProdutoItem from 'components/produto-item'
import { SHOW_ALL, SHOW_ON_SALE } from 'reducers/filter-produtos/actions'

const ProdutoList = ({ produtos, filter }) => (
  <section className='container'>
    <div className="produtos ">
      {getOnSale(produtos, filter).map((item, index) => (
        <ProdutoItem
          key={index}
          id={item}
          cor={produtos[item].color}
          status={produtos[item].disponivel}
          image={produtos[item].imagem}
          name={produtos[item].nome}
          desconto={produtos[item].promocao}
          parcelas={produtos[item].parcelas}
          atual={produtos[item].preco_atual}
          anterior={produtos[item].preco_regular}
          tamanhos={produtos[item].sizes}
        />
      ))}
    </div>
  </section>
)

const getOnSale = (produtos, filter) => {
  return {
    [SHOW_ALL]: Object.keys(produtos).map(item => item),
    [SHOW_ON_SALE]: Object.keys(produtos).filter(item => produtos[item].disponivel)
  }[filter]
}

const mapStateToProps = (state) => ({
  produtos: state.produtos,
  filter: state.filter
})

export default connect(mapStateToProps)(ProdutoList)
