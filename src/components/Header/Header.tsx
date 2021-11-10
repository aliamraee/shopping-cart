import React, { useContext } from "react";
import IconBasket from "../../resources/icons/shopping-cart.svg";
import { Link } from "react-router-dom";
import ShopContext from "../../context/ShopContext";
import { HeaderStyle, IconBox, Nav } from "./Header.Styles";

function Header() {
  const { state } = useContext(ShopContext);

  return (
    <HeaderStyle>
      <Nav>
        <h1>Shopping Cart</h1>

        <Link to="/">
          <p>Products</p>
        </Link>
      </Nav>

      <Link to="/backet">
        <IconBox>
          <img src={IconBasket} alt="shopping cart" />
          <div>{state.carts.length}</div>
        </IconBox>
      </Link>
    </HeaderStyle>
  );
}

export default Header;
