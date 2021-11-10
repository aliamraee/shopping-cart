import React, { ReactNode, useEffect, useReducer } from "react";

import ShopContext from "./ShopContext";
import { defaultCartData, productsData } from "../data/productData";
import { shopReducer } from "./reducers";

interface PropsType {
  children: ReactNode;
}

export default function GlobalState(props: PropsType) {
  
  const dataFromLocalStorage = JSON.parse(
    localStorage.getItem("data") ||
      JSON.stringify({ carts: defaultCartData, product: productsData })
  );

  const [state, dispatch] = useReducer(shopReducer, dataFromLocalStorage);

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(state));
  }, [state]);

  return (
    <ShopContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {props.children}
    </ShopContext.Provider>
  );
}
