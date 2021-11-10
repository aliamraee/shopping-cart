import React, { useContext } from "react";
import ShopContext from "../../context/ShopContext";
import { CartItemType } from "../../types/shared";
import CartItem from "../CartItem";
import {
  SectionTitle,
  CheckoutBox,
  TitleCheckout,
  BoxTotalPrice,
  Text,
  Content,
  MessageBox,
  SectionTitleContent
} from "./Cart.styles";

const Cart = () => {
  const { state, dispatch } = useContext(ShopContext);

  const totalPrice = state.carts.reduce(
    (price, item) => price + item.quantity * item.price,
    0
  );

  return (
    <Content>
      {state.carts.length ? (
        <>
          <SectionTitleContent >
            <SectionTitle>
              <div>
                <span>Image</span>
              </div>
              <div>
                <span>product</span>
              </div>
              <div>
                <span>Price</span>
              </div>
              <div>
                <span>Quantity</span>
              </div>
              <div>
                <span>Total</span>
              </div>
              <div></div>
            </SectionTitle>
            {state.carts.map((item: CartItemType) => {
              return <CartItem product={item} totalPrice={totalPrice} />;
            })}
          </SectionTitleContent>
          <CheckoutBox>
            <TitleCheckout>Checkout</TitleCheckout>
            <BoxTotalPrice>
              <p>Cart Total: </p>
              <span>{state.carts.length}</span>
            </BoxTotalPrice>

            <BoxTotalPrice>
              <p>Total Item: </p>
              <span>${totalPrice}</span>
            </BoxTotalPrice>

            <Text>Shopping & taxes calculated at checkout</Text>

            <div>
              <button>Checkout</button>
            </div>
            <div>
              <button
                onClick={() =>
                  dispatch({
                    type: "CLEAR_CART",
                  })
                }
              >
                Clear cart
              </button>
            </div>
          </CheckoutBox>
        </>
      ) : (
        <MessageBox>
          <h2>Cart is empty.</h2>
        </MessageBox>
      )}
    </Content>
  );
};

export default Cart;
