
// import { InputComponent } from "../input";
import { Button } from "../../components/button/normal";
import { useForm } from "react-hook-form";
import { FormContainer, FormContent, Title, TextArea, Input } from "./styles";

export const FormComponent = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data)
  return (
    <FormContainer>
      <FormContent onSubmit={handleSubmit(onSubmit)} >
        <Title>Entre em contato</Title>
        <Input {...register("firstName")} type="text" />
        <Input {...register("lastName")} type="text" />
        <Input {...register("email")} type="email"/>
        <TextArea { ...register("messanger")} placeholder="Digite sua mensagem" />
        <Button value="Enviar" />
      </FormContent>
    </FormContainer>
  );
};
