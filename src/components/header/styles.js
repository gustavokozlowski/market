import styled from "styled-components";
import * as palette from "../../styles/variables";
import cartEmpty from "../../assets/cart-empty.svg";

export const HeaderContainer = styled.header`
  background-color: ${palette.HEADERBACKGROUNDCOLORDESKTOP};
  height: 10vh;
  display: flex;
  border: 2px solid #000;
`;
export const HeaderContent = styled.main`
  display: flex;
  width: 100vw;
  align-items: center;
  justify-content: space-around;
  `;
  export const LogoContainer = styled.div`
    /* background-color: orange; */
    width: 40vw ;
    display: flex;
    align-items: center;
    
  `;
export const NavbarContainer = styled.div`
  /* background-color: aqua; */
  display: flex;
  align-items: center;
`;
export const NavbarContent = styled.nav`
  display: flex;
  width: 20vw;
  align-items: center;
  justify-content: space-evenly;
`;

export const Title = styled.h1`
  background: ${palette.HEADERCOLORTITLE};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 1.8rem;
  font-weight: bolder;
`;
export const Text = styled.p`
  font-size: 1.2rem;
  font-weight: 600;
`;

export const MyIcon = styled.img`
  width: 2rem;
  /* background-color: aliceblue; */
  /* <MyIcon src="/path/to/sourceImage" /> // uses "/path/to/sourceImage" */
`;

MyIcon.defaultProps = {
  src: cartEmpty,
};
