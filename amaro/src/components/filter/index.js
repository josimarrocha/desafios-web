'use strict'

import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { SHOW_ON_SALE, SHOW_ALL } from 'reducers/filter-produtos/actions'
import { filterOnSale } from 'reducers/filter-produtos/action-creators'

const Filter = ({ setFilter }) => (
  <FilterContainer>
    <div className="container">
      <h2 className='title-filter'>Filtro</h2>
      <input type="checkbox" name="filtro" onChange={setFilter} /><span>Em promoção</span>
    </div>
  </FilterContainer>

)

const FilterContainer = styled.div`
  border-bottom: solid 1px #999;
  padding: 5px 0;
  position: relative;
  top: 70px;
  margin-bottom:80px;
  padding-left:10px;
`

const mapDispatchToProps = (dispatch) => ({
  setFilter: (e) => {
    e.target.checked ? dispatch(filterOnSale(SHOW_ON_SALE)) : dispatch(filterOnSale(SHOW_ALL))
  }
})
export default connect(null, mapDispatchToProps)(Filter)
