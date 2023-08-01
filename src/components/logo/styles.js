import styled from "styled-components";
import MarketLogo from "../../assets/logo-icon/logo.svg"

export const LogoContainer = styled.div`
  /* background-color: orange; */
  height: 20vh;
  justify-content: center;
  width: 20vw;
  display: flex;
`;
export const Logo = styled.img`
width: 14.18rem;
`;
Logo.defaultProps = {
  src: MarketLogo,
};
