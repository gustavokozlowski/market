/* eslint-disable react/prop-types */
import { ButtonContainer, Title } from "./styles";

export const Button = ({ value, width }) => {
  return (
    <ButtonContainer  width={width}>
      <Title> {value} </Title>
    </ButtonContainer>
  );
};
