import styled from "styled-components";

export const FormContainer = styled.section`
  height: 90vh;
  display: flex;
  align-items: center;
  align-self: center;
  flex-direction: row;
`;
export const Title = styled.h1`
  font-size: 2rem;

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

export const FormContent = styled.form`
  display: flex;
  height: 50vh;
  flex-direction: column;
  gap: 1.5rem;
  background: #1ed760;
  width: 60vw;
  padding: 1rem;
  border-radius: 8px;
  
`;
