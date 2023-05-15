import styled from 'styled-components'

const ChatImg = styled.img`
  width: 60px;
  box-shadow: -2px 5px 8px rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  cursor: pointer;
  position: fixed;
  bottom: 20px;
  right: 20px;
  &:hover {
    box-shadow: 0 7px 10px rgba(0, 0, 0, 0.09);
  }
`

export { ChatImg }