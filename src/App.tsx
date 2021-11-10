import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./components/Products";
import Cart from "./components/Cart";
import GlobalState from "./context/GlobalState";
import Header from "./components/Header";

function App() {
  return (
    <div >
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/backet" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
function AppContainer() {
  return (
    <GlobalState>
      <App />
    </GlobalState>
  );
}

export default AppContainer;
