'use strict'

import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import ProdutosList from 'components/produtos'
import Carrinho from 'components/carrinho'
import { fetchProdutos } from 'reducers/produtos/action-creators'
import Filter from './components/filter'
import Header from './components/header'

import './css/style.css'

class App extends PureComponent {
  componentDidMount() {
    this.props.fetchProdutos()
  }
  render() {
    return (
      <div>
        <Header />
        <Carrinho />
        <Filter />
        <ProdutosList />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchProdutos: () => dispatch(fetchProdutos())
})

export default connect(null, mapDispatchToProps)(App)
