import { InputComponent } from "../input";
import {
FormContainer,FormContent,Title, TextArea
} from "./styles";

export const FormComponent = () => {
  return (
      <FormContainer>
        <FormContent>
        <Title>Entre em contato</Title>
        <InputComponent inputName="name" placeholder="Nome" type="text" />
        <InputComponent inputName="surname" placeholder="Sobrenome" type="text" />
        <InputComponent inputName="email" placeholder="email@exemplo.com" type="email" />
        <TextArea placeholder="Digite sua mensagem" />
        </FormContent>
      </FormContainer>
  );
};
