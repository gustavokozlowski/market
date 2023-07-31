import styled from "styled-components";
import * as palette from "../../styles/variables";

export const ProductListSection = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ProductListContainer = styled.div`
  /* background-color: orange; */
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
`;

export const ProductListContent = styled.main`
  display: grid;
  height: 100%;
  width: 100%;
  grid-template-columns: auto auto auto auto;
  justify-content: center;
  gap: 2rem;
  `;

export const TitleSession = styled.h1`
  color: ${palette.COLORTITLESESSION};
  font-size: 2.6rem;
  margin: 4rem 0 0 0;
  line-height: 2.5rem;
  font-weight: 700;
`;