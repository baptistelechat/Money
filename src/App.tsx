import React, { useState } from "react";
import BackOnTop from "./components/BackOnTop/BackOnTop";
import Home from "./components/Home/Home";
import Settings from "./components/Settings/Settings";
import { initialState, MoneyContext } from "./context/moneyContext";

function App() {
  const [display, setDisplay] = useState({ Home: true, Settings: false });

  console.log(initialState);

  return (
    <MoneyContext.Provider
      value={{
        ...initialState,
        display,
        setDisplay,
      }}
    >

      <BackOnTop />
      <Home />
      <Settings />
    </MoneyContext.Provider>
  );
}

export default App;
