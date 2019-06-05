'use strict'

import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import ProdutosList from 'components/produto-list'
import Carrinho from 'components/carrinho'
import { fetchProdutos } from 'reducers/produtos/action-creators'
import { filterOnSale } from 'reducers/filter-produtos/action-creators'
import { SHOW_ON_SALE, SHOW_ALL } from 'reducers/filter-produtos/actions'
import { openCarrinho } from 'reducers/ui/action-creators'

import './css/style.css'

class App extends PureComponent {
  componentDidMount() {
    this.props.fetchProdutos()
  }
  render() {
    const { setFilter, produtos, open } = this.props
    return (
      <div>
        <Header>
          <div className='container'>
            <Titulo className=''>Amaro</Titulo>
            <CarrinhoBtn onClick={open}>
              {produtos.length > 0 && <div>{produtos.length}</div>}
            </CarrinhoBtn>
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
  width:28px;
  height:28px;
  float:right;
  background: black;
  margin-top:15px;
  margin-right:10px;
  position: relative;
  cursor: pointer;
  div{
    width:20px;
    height:20px;
    background: red;
    border-radius:50%;
    color: white;
    position: absolute;
    right: 0;
    top:-5px;
    text-align:center;
    font-weight: 500;

  }
`
const mapStateToProps = (state) => ({
  produtos: Object.keys(state.carrinho)
})

const mapDispatchToProps = (dispatch) => ({
  fetchProdutos: () => dispatch(fetchProdutos()),
  setFilter: (e) => {
    e.target.checked ? dispatch(filterOnSale(SHOW_ON_SALE)) : dispatch(filterOnSale(SHOW_ALL))
  },
  open: () => dispatch(openCarrinho())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
