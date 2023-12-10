import styled from "styled-components";
import * as palette from "../../styles/variables";

export const CartContainer = styled.div`
  flex-direction: column;
  background-color: blueviolet;
  display: flex;
  align-items: center;
  height: fit-content;
`;
export const CartContent = styled.main`
  background-color: aliceblue;
  display: grid;
  width: 100%;
  grid-template-columns: auto auto;
  justify-content: center;
  height: 70vh;
  width: 80vw;
  gap: 1rem;
`;
export const BoxContent = styled.div`
  /* background-color: aliceblue; */
  /* align-items: center;
  justify-content: center;
  display: flex;
  height: 70vh;
  width: 15vw;
  flex-direction: column;
  gap: 1rem;
  text-align: center; */
`;
export const BoxContainer = styled.main`
   background-color: orangered;
  align-items: center;
  justify-content: center;
  display: flex;
  height: 70vh;
  width: 20vw;
  flex-direction: column;
  gap: 1rem;
  text-align: center; 
`;
export const FormContainer = styled.form`
  background-color: beige;
  display: flex;
  height: 70vh;
  width: 60vw;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
`;
export const FormContent = styled.div`
  flex-direction: row;

   position:relative;
   display: flex;
   justify-content: center;
  align-items: center;
  width: 25.75rem;
`;
// export const ButtonContainer = styled.div`
//   /* background-color: yellow; */
//   display: flex;
//   height: 8vh;
//   width: 15vw;
//   gap: 1rem;
//   border-radius: 6px;
//   justify-content: center;
// `;
export const Input = styled.input`
  background:  linear-gradient(#fff, #fff) padding-box, ${palette.HEADERCOLORTITLE} border-box;
  font-weight: 500;
  height: 3.25rem;
  width: 25.75rem;
  display: flex;
  padding: 0 0 0 2rem;
  font-size: 1.25rem;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  border: 1px solid transparent;

`;

export const ButtonContainer = styled.button`

  background: ${palette.BUTTONCOLOR};
  height: 2.625rem;
  position:absolute;
  right: 4px;
  top: 4px;
  border-radius: 50px;
  border:none;
  width:  ${(props) => props.width || "7rem" };
  outline:none;
  text-align:center;
  font-weight:bold;
  transition: transform 100ms all;
  &:hover {
      transform: scale(1.01);
  }
`;

export const ProductImg = styled.img`
  padding: 0.75rem;
  height: 12rem;
  width: 14rem;
  border-radius: 12px;
`;

export const ProductName = styled.h1`
  color: ${palette.COLORTITLESESSION};
  font-size: 1rem;
`;
export const Paragraph = styled.p`
  color: ${(props) => props.color || palette.COLORTITLESESSION};
  font-weight: ${(props) => props.fontWeight || 400};
  font-size: 1rem;
`;

export const SubTitle = styled.h1`
  color: ${palette.COLORTITLESESSION};
  font-size: 1.5rem;
  font-weight: 700;
  
`;
