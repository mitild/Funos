import {RecommendedCard, RecommendedImg, StyledReviewWrapper, RecommendedBudge, ReviewCount, StyledB, StyledPromoText, RInfoWrapper, RecommendedTitle} from './StyledRecommended';
import {TbStarFilled} from 'react-icons/tb';
import {AiOutlineTag, AiOutlineEuro} from 'react-icons/ai';

const RCards = ({ name, img, rating, reviews, location, hasPromo, price, isExclusive, id }) => {
  return (
    <RecommendedCard>

        <RecommendedImg src={ img }/>
        { isExclusive && <RecommendedBudge>EXCLUSIVO</RecommendedBudge> }
        
        <RInfoWrapper>
          <RecommendedTitle>{ name }</RecommendedTitle>
          <StyledReviewWrapper>
            <TbStarFilled style={ {color: '#FF9C00'}}/>
            <ReviewCount><StyledB> { rating } </StyledB> {`(${reviews}) - ${ location }`} </ReviewCount>
          </StyledReviewWrapper>

          <StyledReviewWrapper>
            <StyledPromoText><AiOutlineTag style={{ fontSize: '1.1rem', verticalAlign: 'top' }}/>{ hasPromo ? ' Descuentos aplicables' : ' Mejor precio asegurado'}</StyledPromoText>
          </StyledReviewWrapper>

          <StyledReviewWrapper>
            <StyledPromoText><AiOutlineEuro style={{ fontSize: '1.1rem', verticalAlign: 'top' }} />{ ` Desde ${ price }€`}</StyledPromoText>
          </StyledReviewWrapper>
        </RInfoWrapper>

      </RecommendedCard>
  )
}

export default RCards