import styled from "styled-components";

export const FormContainer = styled.section`
  height: 80vh;

`;
export const Title = styled.h1`
  font-size: 2rem;
  margin-top: 10rem;

`;
export const TextArea = styled.textarea`
   color: rgba(130, 130, 130, 1);
  background: rgba(242, 242, 242, 1);
  outline: none;
  border-radius: 15px;
  border: none;
  padding: 1.787rem;
  font-weight: 500;
  width: 36.25rem;
  height: 6.313;
  font-size: 1.25rem;
`;
export const Input = styled.input`
  color: rgba(130, 130, 130, 1);
  background: rgba(242, 242, 242, 1);
  outline: none;
  border-radius: 15px;
  border: none;
  padding: 1.787rem;
  font-weight: 500;
  width: 36.25rem;
  height: 4rem;
  font-size: 1.25rem;
`;
export const FormContent = styled.main`
  display: flex;
  /* gap: 10rem; */
  /* background: #1ed760; */
  width: 100%;
  align-items: center;
  justify-content: space-evenly ;
  border-radius: 8px;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  /* background: #1ed760; */
  width: 30vw;
  height: fit-content;
  border-radius: 8px;
`;
