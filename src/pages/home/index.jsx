import { api } from "../../services/api/api";
import { ProductList } from "../../components/product-list";
import { Slider } from "../../components/slider";
import { useState, useEffect } from "react";

export const Home = () => {
  const [products, setProducts] = useState([]);
  const [ active, setActive] = useState(false);

  const handleChange = () =>{
      setActive(!active)    
  }

  useEffect(() => {
    if( active === false){
      api.get("/products/?limit=4")
      .then((response) => {
        console.log(response);
        setProducts(response.data);
      })
      .catch((err) => {
        console.error(`ops! ocorreu um erro : ${err}`);
      });
    } else {
      api.get("/products/?limit=8")
      .then((response) => {
        console.log(response);
        setProducts(response.data);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro : " + err);
      });
    }
      
  }, [active]);

  return (
    <>
      <Slider />
      <ProductList onClick={handleChange} products={products} active={active} />
    </>
  );
};
