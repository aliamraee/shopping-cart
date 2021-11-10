import { CartItemType, ProductItemType } from "../types/shared";

interface StateType {
  carts: CartItemType[];
  product: ProductItemType[];
} 
enum ItemActionType {
  ADD_PRODUCT = "ADD_PRODUCT",
  DECREASE_QUANTIRY_PRODUCT = "DECREASE_QUANTIRY_PRODUCT",
  REMOVE_PRODUCT = "REMOVE_PRODUCT",
  CLEAR_CART = "CLEAR_CART",
}

interface ActionType {
  type: ItemActionType;
  product: ProductItemType;
}

interface StateType {
  carts: CartItemType[];
  product: ProductItemType[];
}

const handleAddProduct = (state: StateType, product: ProductItemType) => {
  const productExist: CartItemType | undefined = state.carts.find(
    (item) => item.id === product.id
  );

  if (productExist) {
    let products = state.carts.map((item: CartItemType) =>
      item.id === product.id
        ? { ...productExist, quantity: productExist.quantity + 1 }
        : item
    );

    return {
      product: [...state.product],
      carts: products,
    };
  } else {
    return {
      product: [...state.product],
      carts: [...state.carts, { ...product, quantity: 1 }],
    };
  }
};

const handleDecreaseQuantityProduct = (
  state: StateType,
  product: ProductItemType
) => {
  const productExist: CartItemType | undefined = state.carts.find(
    (item) => item.id == product.id
  );
  if (productExist?.quantity === 1) {
    return {
      product: [...state.product],
      carts: [
        ...state.carts.filter((item: CartItemType) => item.id !== product.id),
      ],
    };
  } else if (productExist) {
    let products = state.carts.map((item: CartItemType) =>
      item.id === product.id
        ? { ...productExist, quantity: productExist.quantity - 1 }
        : item
    );

    return {
      product: [...state.product],
      carts: products,
    };
  }
};

const handleRemoveProduct = (state: StateType, product: ProductItemType) => {
  return {
    product: [...state.product],
    carts: [
      ...state.carts.filter((item: CartItemType) => item.id !== product.id),
    ],
  };
};
const handleClearCart = (state: StateType) => {
  return {
    product: [...state.product],
    carts: [],
  };
};


export function shopReducer(state: StateType, action: ActionType): any {
  switch (action.type) {
    case ItemActionType.ADD_PRODUCT:
      return handleAddProduct(state, action.product);

    case ItemActionType.DECREASE_QUANTIRY_PRODUCT:
      return handleDecreaseQuantityProduct(state, action.product);

    case ItemActionType.REMOVE_PRODUCT:
      return handleRemoveProduct(state, action.product);

    case ItemActionType.CLEAR_CART:
      return handleClearCart(state);

    default:
      return state;
  }
}
