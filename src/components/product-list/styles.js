import styled from "styled-components";
import * as palette from "../../styles/variables";

export const ProductListSection = styled.section`
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background-color: aliceblue; */

`;
export const SeeMoreContainer  = styled.div`
  height: 2.7vh;
  /* background-color: burlywood; */
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
export const ProductListContainer = styled.div`
  /* background-color: orange; */
  height: fit-content;
  display: flex;
  flex-direction: column;
`;

export const ProductListContent = styled.main`
  display: grid;
  width: 100%;
  grid-template-columns: auto auto auto auto;
  justify-content: center;
  gap: 2rem;
  `;

export const TitleSession = styled.h1`
  color: ${palette.COLORTITLESESSION};
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 4rem;
`;
export const Text = styled.p`
   background: ${palette.HEADERCOLORTITLE};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 1.2rem;
  cursor: pointer;
`;