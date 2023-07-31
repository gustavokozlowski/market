import styled from "styled-components";
import cartPlus from "../../../assets/button-icons/cart-plus.svg";
import * as palette from "../../../styles/variables";

export const ButtonContainer = styled.button`
  background: ${palette.BUTTONCOLOR};
  height: 5vh;
  width: 6vw;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
`;

export const IconCartPlus = styled.img`
  width: 2rem;
  /* background-color: aliceblue; */
  /* <MyIcon src="/path/to/sourceImage" /> // uses "/path/to/sourceImage" */
`;

IconCartPlus.defaultProps = {
  src: cartPlus,
};
