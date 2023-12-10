import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-weight: bold;
    font-family: 'Inter', sans-serif;
  }

  button {
    cursor: pointer;
    border: none;

  }

  body, html {
  height: 100%;
}

.modal-container{
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: greenyellow;
  
}
.cart-modal-content{
  height: 50dvh;
  width: 100%;
  max-width: 300px;
  background-color: aliceblue;
  padding: 1rem;
  border-radius: 5px;
  gap: 2rem;

}

.cart-modal-overlay{
  position: absolute;
  top: 0;
  left: 50px;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: end;
  align-items: center;
  height: 70vh;
  width: 80vw;
 
  /* background-color: orange; */


}

`;