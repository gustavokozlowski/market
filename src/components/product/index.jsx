/* eslint-disable react/prop-types */
import { Button } from "../button/normal";
import { ButtonPlus } from "../button/plus";
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

// "id": 1,
// "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
// "price": 109.95,
// "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
// "category": "men's clothing",
// "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
// "rating": {
//   "rate": 3.9,
//   "count": 120

export const Product = ({ product }) => {
  return (
    <ProductContainer>
      <ProductContent>
        <ProductImg src={product?.image} />
        <ProductName>{product?.title}</ProductName>
        <ProductRating />
        <PriceBefore>R$5500,00</PriceBefore>
        <PriceWithDiscount>R${product?.price.toFixed(2)}</PriceWithDiscount>
      </ProductContent>
      <ButtonContainer>
        <Button value="Comprar" />
        <ButtonPlus />
      </ButtonContainer>
    </ProductContainer>
  );
};
