import styled from 'styled-components'
import { ProductCard, ProductText } from '../Products/StyledProducts'

const RecommendedContainer = styled.div`
  width: 1360px;
`

const RecommendedH2 = styled.h2`
  font-size: 2rem;
`

const RecommendedCard = styled(ProductCard)`
  width: 302px;
  height: 355px;
  overflow-x: hidden;
  position: relative;
  justify-content: start;
  gap: 1em;
  align-items: start;
  padding: 0;
  margin: 1.5em 0;
`

const RecommendedImg = styled.img`
  height: 50%;
  overflow: clip;
  overflow-clip-margin: content-box;
`

const RecommendedBudge = styled.div`
  position: absolute;
  top: .5em;
  left: .5em;
  background-color: #FF9C00;
  color: #FFF;
  padding: .4em .6em;
  border-radius: 10px;
  font-weight: bold;
  font-size: .8rem;
`

const StyledReviewWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: .4em;
  padding: 0 .6em;
`

const RecommendedTitle = styled(ProductText)`
  padding: 0 .6em .1em;
  font-size: 1.1rem;
`

const ReviewCount = styled.p`
  font-size: .85rem;
  color: #666565;
`

const StyledB = styled.b`
  color: #222;
`

const StyledPromoText = styled(ReviewCount)`
  color: #222;
`

const RInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: .6em;
  padding-top: .6em;
`

export { RecommendedContainer, RecommendedH2, RecommendedCard, RecommendedBudge, RecommendedImg, StyledReviewWrapper, ReviewCount, StyledB, StyledPromoText, RInfoWrapper, RecommendedTitle }