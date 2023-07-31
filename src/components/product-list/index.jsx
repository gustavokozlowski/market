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
export const ProductList = ({ products }) => {
  return (
    <ProductListSection id="contato">
      <ProductListContainer>
        <TitleSession>Produtos</TitleSession>
        <ProductListContent>
          {products &&
            // eslint-disable-next-line react/prop-types
            products.map((product, index) => (
              <Product key={index} product={product} />
            ))}
        </ProductListContent>
        <SeeMoreContainer>
          <Text>VER MAIS</Text>
        </SeeMoreContainer>
      </ProductListContainer>
    </ProductListSection>
  );
};
