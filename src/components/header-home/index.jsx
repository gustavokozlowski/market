import { CartContext } from "../../contexts/cart.jsx";
import { CartModal } from "../modal/index.jsx";
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
  StyledHashLink,
} from "./styles.js";
import { useState } from "react";

export const HeaderHome = () => {
  const { cartItems } = useContext(CartContext);
  const [isOpen, setIsOpen ] = useState(false);

  const handleModal = () => {
    setIsOpen(!isOpen)
  }


  useEffect(() => {}, [cartItems]);

  return (
    <HeaderContainer>
      <HeaderContent>
        <LogoContainer>
          <Title>MARKET</Title>
        </LogoContainer>
        <NavbarContainer>
          <NavbarContent>
            <StyledHashLink smooth to="/#products">
              Produtos
            </StyledHashLink>
            <StyledHashLink smooth to="/#contact">
              Contato
            </StyledHashLink>
            {cartItems.length > 0 ? (
              <CartIcon onClick={handleModal} src={full} />
            ) : (
              <CartIcon onClick={handleModal} src={empty} />
            )}
            <CartModal isOpen={isOpen} closeModal={handleModal} />
          </NavbarContent>
        </NavbarContainer>
      </HeaderContent>
    </HeaderContainer>
  );
};
