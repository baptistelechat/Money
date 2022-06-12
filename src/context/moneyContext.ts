import { createContext } from "react";

export const initialState = {
  display: {
    Home: true,
    Settings: false,
  },
  setDisplay: (display: any) => {},
};

export const MoneyContext = createContext(initialState);
