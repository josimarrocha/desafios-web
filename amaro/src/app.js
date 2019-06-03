'use strict'

import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import ProdutosList from 'components/produto-list'
import Carrinho from 'components/carrinho'
import { fetchProdutos } from 'reducers/produtos/action-creators'
import { filterOnSale } from 'reducers/filter-produtos/action-creators'
import { SHOW_ON_SALE, SHOW_ALL } from 'reducers/filter-produtos/actions'

import './css/style.css'

class App extends PureComponent {
  componentDidMount() {
    this.props.fetchProdutos()
  }
  render() {
    const { setFilter } = this.props
    return (
      <div>
        <Header>
          <div className='container'>
            <Titulo className=''>Amaro</Titulo>
            <CarrinhoBtn />
          </div>
        </Header>
        <Carrinho />
        <Filter>
          <div className="container">
            <h2 className='title-filter'>Filtro</h2>
            <input type="checkbox" name="filtro" onChange={setFilter} /><span>Em promoção</span>
          </div>
        </Filter>
        <ProdutosList />

      </div>
    )
  }
}

const Header = styled.header`
  background: green;
  height: 60px;
  width:100%;
  position: fixed;
  z-index: 1;
  box-shadow: 0px 1px 5px #333;

  .container{
    display: flex;
  }
`
const Titulo = styled.h1`
  font-size: 2.5em;
  color: white;
  align-self:center;
  text-align: center;
  margin-top:5px;
  flex:1;
`
const Filter = styled.section`
  border-bottom: solid 1px #999;
  padding: 5px 0;
  position: relative;
  top: 70px;
  margin-bottom:80px;
  padding-left:10px;
`
const CarrinhoBtn = styled.div`
  width:24px;
  height:24px;
  float:right;
  background: red;
  margin-top:15px;
  margin-right:10px;
`
const mapDispatchToProps = (dispatch) => ({
  fetchProdutos: () => dispatch(fetchProdutos()),
  setFilter: (e) => {
    e.target.checked ? dispatch(filterOnSale(SHOW_ON_SALE)) : dispatch(filterOnSale(SHOW_ALL))
  }
})

export default connect(null, mapDispatchToProps)(App)
