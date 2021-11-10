import React, { useContext } from "react";
import ShopContext from "../../context/ShopContext";
import { CartItemType } from "../../types/shared";
import {
  Button,
  Description,
  Image,
  PriceContent,
  ProductBox,
  Title,
} from "./CartItem.styles";
import PlusIcoon from "../../resources/icons/plus.svg";
import MinusIcoon from "../../resources/icons/minus.svg";
import RemoveIcoon from "../../resources/icons/remove.svg";
interface PropsType {
  product: CartItemType;
  totalPrice: number;
}

const CartItem = (props: PropsType) => {
  const { title, image, description, price, quantity } = props.product;

  const { dispatch } = useContext(ShopContext);

  return (
    <ProductBox>
      <div>
        <Image src={image} alt={title} />
      </div>
      <div>
        <div>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </div>
      </div>
      <PriceContent>
        <span>${price}</span>
      </PriceContent>
      <div>
        <Button
          onClick={() => {
            dispatch({
              type: "DECREASE_QUANTIRY_PRODUCT",
              product: props.product,
            });
          }}
        >
          <img src={MinusIcoon} alt="Decrease quantity" />
        </Button>
        <span>{quantity}</span>
        <Button
          onClick={() => {
            dispatch({
              type: "ADD_PRODUCT",
              product: props.product,
            });
          }}
        >
          <img src={PlusIcoon} alt="Increase quantity" />
        </Button>
      </div>
      <PriceContent>
        <span>${quantity ? price * quantity : price}</span>
      </PriceContent>
      <div>
        <Button
          onClick={() => {
            dispatch({
              type: "REMOVE_PRODUCT",
              product: props.product,
            });
          }}
        >
          <img src={RemoveIcoon} alt="Remove" />
        </Button>
      </div>
    </ProductBox>
  );
};

export default CartItem;
