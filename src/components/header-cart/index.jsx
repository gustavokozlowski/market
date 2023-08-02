import {
  HeaderContainer,
  HeaderContent,
  Title,
  Text,
  NavbarContainer,
  NavbarContent,
  LogoContainer,
} from "./styles.js";

export const HeaderCart = () => {
    return (
      <HeaderContainer>
        <HeaderContent>
          <LogoContainer>
            <Title>MARKET</Title>
          </LogoContainer>
          <NavbarContainer>
            <NavbarContent>
              <Text>Carrinho</Text>
            </NavbarContent>
          </NavbarContainer>
        </HeaderContent>
      </HeaderContainer>
    );
  };
