import { HiOutlineSearch } from "react-icons/hi";
import { BgImg, HeroContainer, HeroH1, HeroH5, HeroForm, InputWrapperSearch, InputWrapperLocation, HeroInputsearch, HeroInputLocation, HeroBtn, HeroInputSpan } from './StyledHero';

const Hero = () => {
  return (
    <BgImg>
      <HeroContainer>
        <HeroH1>Compara precios de Funerarias</HeroH1>
        <HeroH5>Consigue descuentos de hasta el 50%</HeroH5>
        <HeroForm>
          <InputWrapperSearch>
          <HiOutlineSearch style={{ fontSize: '1.3rem', color: '#7b7979' }}/>
          <HeroInputsearch placeholder="¿Qué servicio buscas?"/>
          </InputWrapperSearch>
          <InputWrapperLocation>
          <HeroInputSpan>en</HeroInputSpan>
          <HeroInputLocation placeholder="(Ej: Barcelona) "/>
          </InputWrapperLocation>
          <HeroBtn>Buscar</HeroBtn>
        </HeroForm>
      </HeroContainer>
    </BgImg>
  )
}

export default Hero