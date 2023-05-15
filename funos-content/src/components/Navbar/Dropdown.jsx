import {DropDownUl, DropDownLi, DropdownWrapper, ItemsWrapper} from './StyledNav';
import {ProductCard, ProductText, ProductAnchor} from '../Products/StyledProducts';
const Dropdown = ({ classname, handleDropdown }) => {

  const onLeave = () => {
   handleDropdown(false)
  }
  return (
    <DropdownWrapper
      className={classname}
      onMouseLeave={ onLeave }
    >
      <h2>Compara entre:</h2>
      <ItemsWrapper>
        <DropDownUl>
          <DropDownLi>Funerarias</DropDownLi>
          <DropDownLi>Seguros de Decesos</DropDownLi>
          <DropDownLi>Velorios</DropDownLi>
          <DropDownLi>Cementerios</DropDownLi>
          <DropDownLi>Hermitas</DropDownLi>
          <DropDownLi>Avisos Fúnebres</DropDownLi>
          <DropDownLi>Traslados</DropDownLi>
          <DropDownLi>Ceremonias</DropDownLi>
          <DropDownLi>Velatorios</DropDownLi>
          <DropDownLi>Arreglos Florales</DropDownLi>
        </DropDownUl>
        <ProductCard>
          <ProductText>¿Prefieres planes integrales? <br/>Te asesoramos</ProductText>
          <ProductAnchor>Comenzar ></ProductAnchor>
        </ProductCard>
      </ItemsWrapper>
    </DropdownWrapper>
  )
}

export default Dropdown