import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { RecommendedContainer, RecommendedH2 } from './StyledRecommended';
import RCards from './RCards';
import Funerarias from './funerarias';

const Recommended = () => {
  
const recommendedItems = Funerarias.map(({ name, img, rating, reviews, location, hasPromo, price, isExclusive, id }) => {
  return (
    <RCards 
      key={ id }
      name={ name }
      img={ img }
      rating={ rating }
      reviews={ reviews }
      location={ location } 
      hasPromo={ hasPromo }
      price={ price }
      isExclusive={ isExclusive }
    />
  )
})

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

  return (
    <RecommendedContainer>
      <RecommendedH2>Empresas Funerarias Recomendadas</RecommendedH2>
      <Carousel responsive={ responsive } swipeable={true}>
      { recommendedItems }
      </Carousel>
    </RecommendedContainer>
  )
}

export default Recommended