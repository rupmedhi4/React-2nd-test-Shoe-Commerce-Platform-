import React, { useState } from "react";
import Header from "./Components/Header/Header";
import Form from "./Components/Form/Form";
import List from "./Components/List/List";
import ContextProvider from "./Store/ContextProvider";
import Cart from "./Components/Cart/Cart";

function App() {
  const [cartShown, setCartShown] = useState(false);

  const cartHandler = () => {
    if (cartShown === true) setCartShown(false);
    else setCartShown(true);
  }

  return (
    <ContextProvider>
      {cartShown && <Cart onClick={cartHandler} />}
      <Header onClick={cartHandler} />
      <main>
        <Form />
        <List />
      </main>
    </ContextProvider>
  );
}

export default App;
