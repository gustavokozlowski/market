import { Product } from "../product";
import {
  ProductListContent,
  TitleSession,
  ProductListContainer,
  ProductListSection,
  SeeMoreContainer,
  Text,
} from "./styles";
/* eslint-disable react/prop-types */
export const ProductList = ({ products, onClick, active }) => {
  return (
    <ProductListSection id="product">
      <ProductListContainer>
        <TitleSession>Produtos</TitleSession>
        <ProductListContent>
          {products &&
            products.map((product, index) => (
              <Product key={index} product={product} />
            ))}
        </ProductListContent>
        <SeeMoreContainer>
          {active === false ? (
            <Text onClick={onClick}>VER MAIS</Text>
          ) : (
            <Text onClick={onClick}>VER MENOS</Text>
          )}
        </SeeMoreContainer>
      </ProductListContainer>
    </ProductListSection>
  );
};
