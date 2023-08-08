import { api } from "../../services/api/api";
import { ProductList } from "../../components/product-list";
import { Slider } from "../../components/slider";
import { useState, useEffect } from "react";
import { FormComponent } from "../../components/form";
import { HomeContainer, Section } from "./styles";

export const Home = () => {
  const [products, setProducts] = useState([]);
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };
  useEffect(() => {
    if (active === false) {
      api
        .get("/products/?limit=4")
        .then((response) => {
          setProducts(response.data);
        })
        .catch((err) => {
          console.error(`ops! ocorreu um erro : ${err}`);
        });
    } else {
      api
        .get("/products/?limit=8")
        .then((response) => {
          setProducts(response.data);
        })
        .catch((err) => {
          console.error("ops! ocorreu um erro : " + err);
        });
    }
  }, [active]);

  return (
    <HomeContainer>
      <Slider />
      <Section id="products">
        <ProductList
          onClick={handleClick}
          products={products}
          active={active}
        />
      </Section>
      <Section id="contact">
        <FormComponent />
      </Section>
    </HomeContainer>
  );
};
