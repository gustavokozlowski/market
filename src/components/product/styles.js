import styled from "styled-components";
import * as palette from "../../styles/variables";
import Rating from "../../assets/rating-icons/star-rating.svg";

export const ProductContainer = styled.main`

flex-direction: column;
  /* background-color: blueviolet; */
  height: 50vh;
  display: flex;
  text-align: center;
  border-radius: 6px;
  align-items: center;
  box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.25);
  box-sizing: border-box;

`;
export const ProductContent = styled.div`
  /* background-color: aliceblue; */
  align-items: center;
  justify-content: center;
  display: flex;
  height: 45vh;
  width: 15vw;
  flex-direction: column;
  gap: 1rem;
`;
export const ButtonContainer = styled.main`
  background-color: yellow;
  height: 25vh;
  display: flex;
  width: 15vw;
  border-radius: 6px;
`;

export const ProductImg = styled.img`
  height: 50%;
  border-radius: 6px;
`;
export const ProductRating = styled.img`
  width: 10rem;
`;

export const ProductName = styled.h1`
  color: ${palette.COLORTITLESESSION};
  font-size: 1.2rem;
`;
export const PriceBefore = styled.h1`
  color: ${palette.COLORPRICEBEFORE};
  font-size: 1.2rem;
  text-decoration: line-through;
`;
export const PriceWithDiscount = styled.h1`
  color: ${palette.COLORTITLESESSION};
  font-size: 1.6rem;
`;

// export const StarRating = styled.img`
//   width: 2rem;
//   /* background-color: aliceblue; */
//   /* <MyIcon src="/path/to/sourceImage" /> // uses "/path/to/sourceImage" */
// `;

ProductRating.defaultProps = {
  src: Rating,
};
