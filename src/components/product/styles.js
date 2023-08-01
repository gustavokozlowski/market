import styled from "styled-components";
import * as palette from "../../styles/variables";
import Rating from "../../assets/rating-icons/star-rating.svg";

export const ProductContainer = styled.main`
  flex-direction: column;
  /* background-color: blueviolet; */

  display: flex;
  border-radius: 10px;
  align-items: center;
  width: 15vw;
  box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.25);
  box-sizing: border-box;
`;
export const ProductContent = styled.div`

  /* background-color: aliceblue; */
  align-items: center;
  justify-content: center;
  display: flex;
  height: 40vh;
  width: 15vw;
  flex-direction: column;
  gap: 0.8rem;
  text-align: center;
`;
export const ButtonContainer = styled.div`
  /* background-color: yellow; */
  display: flex;
  height: 8vh;
  width: 15vw;
  gap: 1rem;
  border-radius: 6px;
  align-items: center;
  justify-content: center;
`;

export const ProductImg = styled.img`
  padding: 0.75rem;
  height: 15.82rem;
  width: 15.5rem;
  border-radius: 12px;
`;
export const ProductRating = styled.img`
  width: 8rem;
`;

export const ProductName = styled.h1`
  color: ${palette.COLORTITLESESSION};
  font-size: 1rem;
  font-weight: bolder;
`;
export const PriceBefore = styled.h1`
  color: ${palette.COLORPRICEBEFORE};
  font-size: 1.1rem;
  text-decoration: line-through;
`;
export const PriceWithDiscount = styled.h1`
  color: ${palette.COLORTITLESESSION};
  font-size: 1.4rem;
`;

// export const StarRating = styled.img`
//   width: 2rem;
//   /* background-color: aliceblue; */
//   /* <MyIcon src="/path/to/sourceImage" /> // uses "/path/to/sourceImage" */
// `;

ProductRating.defaultProps = {
  src: Rating,
};
