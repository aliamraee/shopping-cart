import React, { useContext } from "react";
import ShopContext from "../../context/ShopContext";
import { ProductItemType } from "../../types/shared";
import {
  Button,
  Description,
  FooterItem,
  Image,
  PriceContent,
  ProductBox,
  Title,
} from "./ProductItem.styles";

interface PropsType {
  product: ProductItemType;
}

const ProductItem = (props: PropsType) => {
  const { title, image, description, price, id } = props.product;

  const { state, dispatch } = useContext(ShopContext);

  const InCart = state.carts.find((item) => item.id === id);

  return (
    <ProductBox>
      <div>
        <Image src={image} alt={title} />
      </div>
      <div>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <FooterItem>
          <PriceContent>
            <p>price</p>
            <span>${price}</span>
          </PriceContent>

          <Button
            inCart={!!InCart}
            onClick={() => {
              dispatch({
                type: "ADD_PRODUCT",
                product: props.product,
              });
            }}
          >
            Add to cart
          </Button>
        </FooterItem>
      </div>
    </ProductBox>
  );
};

export default ProductItem;
