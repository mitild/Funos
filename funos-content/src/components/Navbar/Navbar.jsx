import ListItems from './ListItems';
import { NavbarBg, NavbarDiv, StyledNav, StyledUl, StyledLi, StyledImg, StyledBtn, TextWrapper, StyledTopText, StyledTopText2 } from './StyledNav';

const Navbar = ({ handleDropdown }) => {

  const onEnter = () => {
    setTimeout(()=> {handleDropdown(true)}, 500) 
  }


  const items = ListItems.map(({ item, id }) => {
    return <StyledLi
              key={ id }
              onMouseOver={ onEnter }
            >
                { item }
            </StyledLi>
  })

  return (
    <NavbarBg>
      <TextWrapper>
        <StyledTopText>Te llamamos gratis</StyledTopText>
        <StyledTopText2>📞 &nbsp; 937 82 82 00</StyledTopText2>
      </TextWrapper>
      <NavbarDiv>
      <StyledNav>
        <StyledImg src="./public/full-logo.png" alt="site logo"/>
        <StyledUl>
          { items }
        </StyledUl>
        <StyledBtn>Comparar precios</StyledBtn>
      </StyledNav>
      </NavbarDiv>
    </NavbarBg>
  )
}

export default Navbar