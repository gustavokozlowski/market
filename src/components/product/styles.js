import styled from "styled-components";
import * as palette from "../../styles/variables";

export const ProductContainer = styled.main`
  background-color: blueviolet;
  height: 10vh;
  display: flex;
  width: 15vh;
  gap: 2rem;
`;
export const ProductContent = styled.div`
  background-color: aliceblue;
  height: 10vh;
  display: flex;
  width: 15vh;
  gap: 2rem;
`;
export const ButtonContainer = styled.main`
  background-color: yellow;
  height: 10vh;
  display: flex;
  width: 15vh;
  gap: 2rem;
`;

export const ProductImg = styled.img`
  width: 40%;
  height: 40%;
`;
export const ProductRating = styled.img`
  width: 40%;
  height: 40%;
`;

export const ProductName = styled.h1`
  color: ${palette.COLORTITLESESSION};
  font-size: 2rem;
`;
export const PriceBefore = styled.h1`
  color: ${palette.COLORPRICEBEFORE};
  font-size: 1.2rem;
`;
export const PriceWithDiscount = styled.h1`
  color: ${palette.COLORTITLESESSION};
  font-size: 1.7rem;
`;
