import styled from "styled-components";
import cartPlus from "../../../assets/button-icons/cart-plus.svg";
import * as palette from "../../../styles/variables";

export const ButtonContainer = styled.button`
  background:  linear-gradient(#fff, #fff) padding-box, ${palette.HEADERCOLORTITLE} border-box;
  height: 40px;
  width: 95px;
  display: flex;
  padding: 1rem;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  border: 3px solid transparent;
`;

export const IconCartPlus = styled.img`
  width: 30px;
  /* background-color: aliceblue; */
  /* <MyIcon src="/path/to/sourceImage" /> // uses "/path/to/sourceImage" */
`;

IconCartPlus.defaultProps = {
  src: cartPlus,
};
