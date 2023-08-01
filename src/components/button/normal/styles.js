import styled from "styled-components";
import * as palette from "../../../styles/variables";

export const ButtonContainer = styled.button`
  background: ${palette.BUTTONCOLOR};
  height: 5vh;
  width:  ${(props) => props.width || "6vw;" };
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  &:hover {
      transform: scale(1.05);
  }
`;

export const Title = styled.h1`
  font-size: 1.2rem;
  font-weight: 500;
  color: ${palette.HEADERBACKGROUNDCOLORDESKTOP};
`;
