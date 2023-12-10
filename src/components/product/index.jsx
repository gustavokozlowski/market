/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Button } from "../button/normal";
import { ButtonPlus } from "../button/plus";
import { CartContext } from "../../contexts/cart.jsx";
import { useContext } from "react";
//

import {
  ProductContainer,
  ButtonContainer,
  ProductContent,
  PriceBefore,
  PriceWithDiscount,
  ProductImg,
  ProductRating,
  ProductName,
} from "./styles";


export const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  return (
    <ProductContainer>
      <ProductContent>
        <ProductImg src={product?.image} />
        <ProductName>{product?.title}</ProductName>
        <div className="product-description">

        </div>
        <div>
          <ProductRating value={product?.rating.rate}   readOnly  />
          {product?.rating.rate}
        </div>
        <PriceBefore>R$5500,00</PriceBefore>
        <PriceWithDiscount>R${product?.price.toFixed(2)}</PriceWithDiscount>
      </ProductContent>
      <ButtonContainer>
        <Button value="Comprar" />
        <ButtonPlus handleClick={() => addToCart(product)} />
      </ButtonContainer>
    </ProductContainer>
  );
};
