import React, { useContext } from "react";
import ShopContext from "../../context/ShopContext";
import { ProductItemType } from "../../types/shared";
import ProductItem from "../ProductItem";
import { Wrapper } from "./Products.styles";

const Products = () => {
  const { state } = useContext(ShopContext);

  return (
    <Wrapper>
      {state.product.map((item: ProductItemType) => {
        return (
          <ProductItem
            key={item.id}
            product={item}
          />
        );
      })}
    </Wrapper>
  );
};

export default Products;
