import { useState } from "react";
import Cart from "./componants/Cart/Cart";
import Header from "./componants/Layout/Header";
import Meals from "./componants/Meals/Meals";
import CartProvider from './Store/CartProvider';


function App() {
  const [cartIsShown, setcartIsShown] = useState(false)

  const showCartHandeler=()=>{
    setcartIsShown(true)
  }
  const hideCartHandeler=()=>{
    setcartIsShown(false)
  }

  return (
    <CartProvider>
    {cartIsShown&& <Cart onCloseCart={hideCartHandeler} />}
      <Header onShowCart={showCartHandeler}/>
      <main>
      <Meals/>
      </main>
    </CartProvider>
  );
}

export default App;
