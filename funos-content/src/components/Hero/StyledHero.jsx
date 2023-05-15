import styled from 'styled-components'

const BgImg = styled.div`
  width: 100vw;
  background-image: url('../../../public/blueChairs.jpg');
  background-position: 40% 65%;
  background-size: cover;
  border-bottom: 1px solid #d9d9d9;
  position: relative;
   &::before {
    content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #FFF;
  clip-path: ellipse(60% 81% at 0% 50%);
  }
`

const HeroContainer = styled.div`
  width: 1360px;
  margin: auto;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  padding: 6em 2em;
`

const HeroH1 = styled.h1`
  padding-bottom: .4em;
  font-size: 3rem;
  line-height: 1.2;
  width: 500px;
`

const HeroH5 = styled.h5`
  padding-bottom: 1em;
  font-size: 1.4rem;
  font-weight: 400;
`

const HeroForm = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr auto;
  /* border: 1px solid #efefef; */
  box-shadow: 0 2px 8px #00000026;
  border-radius: 0.7rem;
`

const InputWrapperSearch = styled.div`
  display: flex;
  align-items: center;
  padding: 1em 5em 1em 1em;
  border: 1px solid #d9d9d9;
  border-radius: .7em 0 0 .7em;
  background-color: #FFF;
  /* border: 1px solid #efefef; */
`

const InputWrapperLocation = styled(InputWrapperSearch)`
  /* border: 1px solid #efefef; */
  border-left: none;
  border-right: none;
  border-radius: 0;
`

const HeroInputsearch = styled.input`
  display: flex;
  align-items: center;
  border: none;
  padding-left: 1em;
  outline: none;
  font-size: 1rem;
  &::placeholder {
    color: #7b7979;
    font-weight: 500;
  }
  /* border-right: 1px solid #efefef; */
`
const HeroInputSpan = styled.span`
  font-size: 1rem;
  color: #7b7979;
  font-weight: 500;
`

const HeroInputLocation = styled(HeroInputsearch)`
`

const HeroBtn = styled.button`
  background-color: #FF9C00;
  color: #FFF;
  border: 1px solid #FF9C00;
  font-size: 1rem;
  font-weight: 700;
  padding: 1em 2em;
  border-radius: 0 .8em .8em 0;
  transition: all .5s;
  cursor: pointer;
  &:hover {
    background-color: #FFF;
    color: #FF9C00;
  }
`
export { BgImg, HeroContainer, HeroH1, HeroH5, HeroForm, InputWrapperSearch, InputWrapperLocation, HeroInputsearch, HeroInputLocation, HeroBtn, HeroInputSpan  }