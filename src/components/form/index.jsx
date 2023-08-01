
// import { InputComponent } from "../input";
import { Button } from "../../components/button/normal";
import { useForm } from "react-hook-form";
import { FormContainer, FormContent, Title, TextArea, Input, Form } from "./styles";
import { LogoMarket } from "../logo";

export const FormComponent = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data)
  return (
    <FormContainer id="contact">
      <FormContent>
      <Form onSubmit={handleSubmit(onSubmit)} >
        <Title>Entre em contato</Title>
        <Input placeholder="Nome" {...register("firstName")} type="text" />
        <Input  placeholder="Sobrenome" {...register("lastName")} type="text" />
        <Input  placeholder="email@exemplo.com" {...register("email")} type="email"/>
        <TextArea { ...register("messanger")} placeholder="Digite sua mensagem" />
        <Button  value="Enviar" />
      </Form>
      <LogoMarket />
      </FormContent>
    </FormContainer>
  );
};
