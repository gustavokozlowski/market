import {
  HeaderContainer,
  HeaderContent,
  Title,
  Text,
  NavbarContainer,
  NavbarContent,
  MyIcon,
  LogoContainer,
} from "./styles";

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <LogoContainer>
          <Title>MARKET</Title>
        </LogoContainer>
        <NavbarContainer>
          <NavbarContent>
            <Text>Produtos</Text>
            <Text>Contato</Text>
            <MyIcon />
          </NavbarContent>
        </NavbarContainer>
      </HeaderContent>
    </HeaderContainer>
  );
};
