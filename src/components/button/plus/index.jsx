/* eslint-disable react/prop-types */
import { ButtonContainer, IconCartPlus } from "./styles";

export const ButtonPlus = ({handleClick}) => {
  return (
    <ButtonContainer onClick={handleClick} >
      <IconCartPlus />
    </ButtonContainer>
  );
};
