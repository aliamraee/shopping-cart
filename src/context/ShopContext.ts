import { CartItemType, ProductItemType } from "./../types/shared";
import React, { createContext } from "react";

interface ContextType {
  state: { product: ProductItemType[]; carts: CartItemType[] };
  dispatch: any;
}

export default createContext<ContextType>({} as ContextType);
