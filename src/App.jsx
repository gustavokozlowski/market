import { Home } from "./pages/home";
import ContextCart from "./contexts"; "./contexts/index";
import { useState } from "react";

function App() {

  const [cart, setCart] = useState([]);

  return (
    <ContextCart.Provider value={{cart, setCart}}>
      <Home />
    </ContextCart.Provider>
  );
}

export default App;
