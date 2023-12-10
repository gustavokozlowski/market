import styled from "styled-components";
import * as palette from "../../../styles/variables";

export const ButtonContainer = styled.button`
  background: ${palette.BUTTONCOLOR};
  height: 40px;
  width:  ${(props) => props.width || "95px;" };
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  transition: all 0.2s;
  &:hover {
    background: bl;
  }
`;

export const Title = styled.h1`
  font-size: 0.8rem;
  font-weight: 500;
  color: ${palette.HEADERBACKGROUNDCOLORDESKTOP};
`;
