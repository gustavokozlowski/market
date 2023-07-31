import { api } from "../../services/api/api";
import { ProductList } from "../../components/product-list";
import { Slider } from "../../components/slider";
import { useState, useEffect } from "react";

export const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    api.get("/products/?limit=4")
      .then((response) => {
        console.log(response);
        setProducts(response.data);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro : " + err);
      });
  }, []);

  return (
    <>
      <Slider />
      <ProductList products={products} />
    </>
  );
};
