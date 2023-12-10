import styled from "styled-components";
import * as palette from "../../styles/variables";
import { Rating } from '@smastrom/react-rating';

export const ProductContainer = styled.main`
  /* background-color: blueviolet; */
  flex-direction: column;
  display: flex;
  border-radius: 15px;
  align-items: center;
  padding: 1rem;
  width: 15vw;
  box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.25);
  box-sizing: border-box;
  gap:0.5rem
`;
export const ProductContent = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  height: 30vh;
  width: 15vw;
  flex-direction: column;
  gap: 0.5rem;
  text-align: center;
  padding: 1rem;
  /* word-break: keep-all;
  word-break: ; */
  
  > div {
    color: #ffa800 ;
    /* background-color: aliceblue; */
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    gap: 0.2rem

  }
 
`;
export const ButtonContainer = styled.div`
  /* background-color: yellow; */
  display: flex;
  gap: 1rem;
  border-radius: 6px;
  justify-content: center;
`;

export const ProductImg = styled.img`
  padding: 0.75rem;
  height: 150px;
  width: 150px;
  border-radius: 20px;
  
  
`;
export const ProductRating = styled(Rating)`
  width: 7rem;

  
`;

export const ProductName = styled.h4`
  color: ${palette.COLORTITLESESSION};
  font-size: 0.8rem;

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

ProductRating.defaultProps = {
  src: Rating,
};
