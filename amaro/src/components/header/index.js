'use strict'

import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { openCarrinho } from 'reducers/ui/action-creators'
import carrinho from '../carrinho-icon.svg'

const Header = ({ open, produtos }) => (
  <HeaderConatiner>
    <div className='container'>
      <Titulo className=''>Amaro</Titulo>
      <CarrinhoBtn onClick={open}>
        <img src={carrinho} alt="" />
        {produtos.length > 0 && <div>{produtos.length}</div>}
      </CarrinhoBtn>
    </div>
  </HeaderConatiner>
)
const HeaderConatiner = styled.header`
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

const CarrinhoBtn = styled.div`
  float:right;
  margin-top:5px;
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
    right: 10px;
    top:5px;
    text-align:center;
    font-weight: 500;
  }
`
const mapStateToProps = (state) => ({
  produtos: Object.keys(state.carrinho)
})

const mapDispatchToProps = (dispatch) => ({
  open: () => dispatch(openCarrinho())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
