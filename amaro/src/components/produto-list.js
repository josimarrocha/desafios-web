'use strict'

import React from 'react'
import { connect } from 'react-redux'
import ProdutoItem from 'components/produto-item'

const ProdutoList = ({ produtos }) => (
  <section className='container'>
    <div className="produtos ">

      {Object.keys(produtos).map((item, index) => (
        <div key={index}>
          <ProdutoItem
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
        </div>
      ))}
    </div>

  </section>
)

const mapStateToProps = (state) => ({
  produtos: state.produtos
})

export default connect(mapStateToProps)(ProdutoList)
