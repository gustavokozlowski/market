import {
  CartContent,
  CartContainer,
  Paragraph,
  ProductImg,
  ProductName,
  BoxContainer,
  BoxContent,
  FormContainer,
  SubTitle,
  Input,
  ButtonContainer,
  FormContent,
} from "./styles";

export const Cart = () => {
  return (
    <CartContainer>
      <CartContent>
        <FormContainer>
          <SubTitle>Cálculo de frete</SubTitle>
          <Paragraph>Informe o seu CEP:</Paragraph>
          <FormContent>
            <Input />
            <ButtonContainer>
              <Paragraph color="rgba(255, 255, 255, 1);">Consultar</Paragraph>
            </ButtonContainer>
          </FormContent>
          <SubTitle>Itens</SubTitle>
        </FormContainer>
        <BoxContainer>
          <BoxContent></BoxContent>
        </BoxContainer>
      </CartContent>
    </CartContainer>
  );
};
