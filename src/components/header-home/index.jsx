import { CartContext } from "../../contexts/cart.jsx";
import { useContext } from "react";
import empty from "../../assets/cart-icons/empty.svg";
import full from "../../assets/cart-icons/full.svg";
import {
  HeaderContainer,
  HeaderContent,
  Title,
  Text,
  NavbarContainer,
  NavbarContent,
  CartIcon,
  LogoContainer,
} from "./styles.js";

export const HeaderHome = () => {
  const { cartItems } = useContext(CartContext);
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
            {cartItems.length > 0 ? (
              <CartIcon src={full} />
            ) : (
              <CartIcon src={empty} />
            )}
          </NavbarContent>
        </NavbarContainer>
      </HeaderContent>
    </HeaderContainer>
  );
};
