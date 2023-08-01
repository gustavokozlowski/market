import { InputComponent } from "../input";
import {
FormContainer,FormContent,Title
} from "./styles";

export const FormComponent = () => {
  return (
      <FormContainer>
        <FormContent>
        <Title>Entre em contato</Title>
        <InputComponent inputName="name" placeholder="Nome" type="text" />
        </FormContent>
      </FormContainer>
  );
};
