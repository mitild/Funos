import styled from 'styled-components'

const ProductsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3em 0 6em;
  width: 1360px;
`

const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.09);
  padding: 1em 0;
  width: 170px;
  height: 170px;
  border-radius: .8em;
  transition: all .2s;
  cursor: pointer;
  &:hover {
     box-shadow: 0 7px 10px rgba(0, 0, 0, 0.09);
  }
`

const ProductText = styled.p`
  font-weight: 600;
`

const ProductAnchor = styled.a`
  font-weight: 600;
  color: #FF9C00;
`

const CardIcon = styled.img`
  height: 70px;
`


export { ProductCard, ProductsContainer, ProductText, ProductAnchor, CardIcon }