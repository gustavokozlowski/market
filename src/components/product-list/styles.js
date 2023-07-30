import styled from "styled-components";
import * as palette from "../../styles/variables";

export const ProductListSection = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
 
`;
export const ProductListContainer = styled.div`
  background-color: orange;
  height: 90vh;
  width: 80vw;
  display: flex;
  flex-direction: column;
`;

export const ProductListContent = styled.main`
     align-items: center;
     justify-content: center;
     margin: 1.5rem;
  `;

export const TitleSession = styled.h1`
  color: ${palette.COLORTITLESESSION};
  align-self: flex-start;
  font-size: 2.2rem;
  margin: 4rem 0 0 0;
`;