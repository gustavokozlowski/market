import { HeaderCart } from "./components/header-cart";
import { HeaderHome } from "./components/header-home";
import { RouterContainer } from "./router";

function App() {
  return (
    <>
      {window.location.pathname === "/" ? <HeaderHome /> : <HeaderCart />}
      <RouterContainer />
    </>
  );
}

export default App;
