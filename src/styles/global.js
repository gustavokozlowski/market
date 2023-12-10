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
    -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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
  background-color: #d53a9d;


  
}
.cart-modal-content{
  height: auto;
  max-height: 700px;
  box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.25);
  
  width: 100%;
  display: flex;
  flex-direction: column;
  max-width: 350px;
  background-color: white;
  padding: 1rem;
  gap: 1rem;

  border-radius: 10px;
  

}

.cart-modal-overlay{
  position: absolute;
  top: 70px;
  left: 50px;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: end;
  height: 100%;
  width: 80vw;

  /* background-color: orange; */
}

.cart-modal-header{
  display: flex;
  /* background-color: #d53a9d; */
  justify-content: space-between;
  .btn-header-modal {
    /* background-color: #d52; */
    width: 30px;
    background-color: transparent;
    font-size: 1rem;

  }
}

.cart-modal-footer{
    display: flex;
    justify-content: center;
    align-items: center;
    width:100%;
    margin: auto;
    /* background-color: #d52; */
}



.card-modal-container{

  display: flex;
  align-items: center;
  justify-content: space-around;
  /* background-color: orange; */
  height: 100px;
  padding: 0.7rem;
  background: linear-gradient(white, white) padding-box,
              linear-gradient(#743ad5, #743ad5) border-box;
  border-radius: 12px;
  border: 1px solid transparent;
  gap: 1rem;
  > img {
    border-radius: 10px;
    height: 70px;
    width: 100px;

  }
  > h2 {
    font-size: 10px;
  }
}

`;