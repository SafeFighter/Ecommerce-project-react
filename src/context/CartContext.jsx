import { createContext, useContext, useEffect, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  function addToCart(product) {
    setCart((prevCart) => [...prevCart, product]);
  }

  function removeFromCart(id) {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  }
  function clearCart() {
    setCart([]);
  }
  return (
    <>
      <CartContext.Provider
        value={{ cart, addToCart, removeFromCart, clearCart }}
      >
        {children}
      </CartContext.Provider>
    </>
  );
}

export default CartContext;
