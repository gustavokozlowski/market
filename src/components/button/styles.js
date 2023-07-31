import styled from "styled-components";
import * as palette from "../../styles/variables";
import cartEmpty from "../../assets/header-icons/cart-empty.svg";

export const ButtonContainer = styled.button`
  background-color: ${palette.HEADERBACKGROUNDCOLORDESKTOP};
  height: 10vh;
  display: flex;
`;

export const Title = styled.h1`
  background: ${palette.HEADERCOLORTITLE};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 1.8rem;
  font-weight: bolder;
`;


export const MyIcon = styled.img`
  width: 2rem;
  /* background-color: aliceblue; */
  /* <MyIcon src="/path/to/sourceImage" /> // uses "/path/to/sourceImage" */
`;

MyIcon.defaultProps = {
  src: cartEmpty,
};
