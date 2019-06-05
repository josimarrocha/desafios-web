'use strict'

import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { closeCarrinho } from 'reducers/ui/action-creators'

const Carrinho = ({ produtosCarrinho, toggleCarrinho, closeCarrinho }) => (
  <CarrinhoContainer style={{ transform: `translateX( ${toggleCarrinho.openCarrinho ? '0%' : '101%'})` }}>
    <Header>
      <div className='fecha' onClick={closeCarrinho}>
        <span />
      </div>
    </Header>
    <ProdutosCarrinho>
      <Title>Produtos adicionados ao carrinho</Title>
      <ProdutoList className='produtos-carrinho-list'>
        {Object.keys(produtosCarrinho).map((item, index) => (
          <Produto key={index}>
            <ProdutoDados>
              <img src={produtosCarrinho[item].imagem} alt="" />
              <div>
                <h2>{produtosCarrinho[item].nome}</h2>
                <Label>{produtosCarrinho[item].preco_atual}</Label><br />
                <Label>QNTD:</Label>
                <InputQuantidade type="text" value={produtosCarrinho[item].qntd} />
                <span>-</span>
                <span>+</span><br />
                <ul>
                  <Label>Tamanhos:</Label>
                  {produtosCarrinho[item].sizes.map(item => (
                    <li key={item.code}><a href="">{item.tamanho}</a></li>
                  ))}
                  {/* <li><a href="">M</a></li> */}
                </ul>
                <h2 style={{ float: 'right' }}>Total:
                 {(produtosCarrinho[item].preco_atual.replace('R$', '').replace(',', '.') * produtosCarrinho[item].qntd)}
                </h2>
              </div>
            </ProdutoDados>
          </Produto>
        ))}
      </ProdutoList>
    </ProdutosCarrinho>
  </CarrinhoContainer>
)


const Header = styled.div`
  height: 60px;
  background: green;
  box-shadow: -3px 1px 5px #333;
`

const Label = styled.label`
  font-weight: 500;
  display: inline-block;
  margin: 5px 0;
`

const InputQuantidade = styled.input`
  width:30px;
  margin-left:5px;
  margin-bottom: 5px;
`

const ProdutoDados = styled.div`
  display:flex;
  img{
    align-self: flex-start;
    max-width: 76px;
    max-height:90px
  }

  div{
    padding-left: 10px;
    box-shadow: -1px 0 2px #999;
    flex:1;

    span{
      display: inline-block;
      background: green;
      width:24px;
      height: 22px;
      vertical-align: middle;
      margin: 0 5px;
      font-size: 1.3em;
      font-weight: 600;
      color: white;
      text-align:center;
    }

    li{
      display: inline-block;
      margin-left:5px;
      a {
        color: black;
        display: block;
        border: 1px solid #333;
        width: 24px;
        height: 20px;
        margin-right: 6px;
        margin-bottom: 5px;
        padding-top: 1px;
        text-align: center;
      }

    }
  }
`

const Title = styled.h1`
  margin-top:10px;
  margin-bottom:15px;
`

const ProdutoList = styled.ul`
  display: flex;
  flex-direction: column;
`

const Produto = styled.li`
  margin-bottom:10px;
  padding:5px;
  background: white;
  border: 1px solid #333;
  width: 100%;
`

const ProdutosCarrinho = styled.div`
  margin: 10px 5px;
  height: 85vh;
  overflow-x: auto;
`

const CarrinhoContainer = styled.div`
  position: fixed;
  width: 360px;
  height: 100vh;
  right:0;
  box-shadow: -1px 0 5px #333;
  background: rgb(221, 221, 221);
  transition: transform .3s ease-in;
  z-index:2;
`

const mapStateToProps = (state) => ({
  produtosCarrinho: state.carrinho,
  toggleCarrinho: state.ui
})

const mapDispatchToProps = { closeCarrinho }

export default connect(mapStateToProps, mapDispatchToProps)(Carrinho)
