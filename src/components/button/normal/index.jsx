/* eslint-disable react/prop-types */
import { ButtonContainer, Title } from "./styles";

export const Button = ({ value }) => {
  return (
    <ButtonContainer>
      <Title> {value} </Title>
    </ButtonContainer>
  );
};
