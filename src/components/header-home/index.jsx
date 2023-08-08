import { CartContext } from "../../contexts/cart.jsx";
import { useContext, useEffect } from "react";
import empty from "../../assets/cart-icons/empty.svg";
import full from "../../assets/cart-icons/full.svg";
import {
  HeaderContainer,
  HeaderContent,
  Title,
  NavbarContainer,
  NavbarContent,
  CartIcon,
  LogoContainer,
  StyledHashLink
} from "./styles.js";


export const HeaderHome = () => {
  const { cartItems } = useContext(CartContext);
 
  useEffect(() => {
  }, [cartItems])
  
  return (
    <HeaderContainer>
      <HeaderContent>
        <LogoContainer>
          <Title>MARKET</Title>
        </LogoContainer>
        <NavbarContainer>
          <NavbarContent>
            <StyledHashLink smooth to="/#products">Produtos</StyledHashLink>
            <StyledHashLink smooth to="/#contact" >Contato</StyledHashLink>
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
