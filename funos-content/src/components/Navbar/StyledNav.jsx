import styled from 'styled-components'

const NavbarBg = styled.nav`
  width: 100%;
  /* display: flex; 
  justify-content: center;
  align-items: center;  */
  border-bottom: 1px solid #d9d9d9;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.09);
`
const NavbarDiv = styled.div`
  width: 100%;
  display: flex; 
  justify-content: center;
  align-items: center; 
`

const StyledNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1360px;
  /* height: 96px; */
  padding: 1em 2.25em 2em;
  color: #222;
`
const StyledUl = styled.ul`
  display: flex;
  gap: 1em;
`

const StyledLi = styled.li`
  list-style: none;
  font-size: .9rem;
  font-weight: 700;
  cursor: pointer;
  transition: all .3s;
  &:hover {
    color: #FF9C00;
  }
`

const StyledImg = styled.img`
  width: 140px;
  cursor: pointer;
`

const StyledBtn = styled.button`
  background-color: #FF9C00;
  padding: .7em 1.3em;
  color: #FFF;
  font-size: .9rem;
  font-weight: 600;
  border: 2px solid #FF9C00;
  border-radius: 25px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.09);
  cursor: pointer;
  transition: all .5s;
  &:hover {
    background-color: #FFF;
    color: #FF9C00;
  }
`
const TextWrapper = styled.div`
  width: 1360px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin: .3em auto 0; */
  margin: 0 auto;
  padding: 0 2.25em;
`

const StyledTopText = styled.p`
  font-size: .8rem;
  font-weight: 700;
  /* display: block;
  float: right;
  justify-self: end; */
  background-color: #dedede;
  padding: .4em 1em;
  border-radius: 0 0 0 25px;
`
const StyledTopText2 = styled(StyledTopText)`
  border-radius: 0 0 25px 0;
  background-color: #FF9C00;
  color: #FFF;
`

const DropdownWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 137.23px;
  width: 100%;
  background-color: #FFF;
  z-index: 999;
  padding: 2em 7.5em 4em;
`

const ItemsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`

const DropDownUl = styled(StyledUl)`
  flex: 3;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  padding-top: 2em;
` 

const DropDownLi = styled(StyledLi)`
    font-weight: 500;
    font-size: 1rem;
    color: #222;
`

export { StyledNav, NavbarDiv, StyledUl, StyledLi, StyledImg, NavbarBg, StyledBtn, TextWrapper, StyledTopText, StyledTopText2, DropDownUl, DropDownLi, DropdownWrapper, ItemsWrapper }