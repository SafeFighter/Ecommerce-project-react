import Header from "../components/Header";
import CartContext from "../context/CartContext";
import { useContext } from "react";
import CartItem from "../components/CartItem";
function Cart() {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);
  return (
    <>
      <Header />
      <h2>
        <i className="bi bi-cart"></i>
      </h2>
      {cart.length === 0 ? (
        <p>You're cart is empty!</p>
      ) : (
        <>
          <h4>Your items:</h4>
          {cart.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onRemove={() => removeFromCart(item.id)}
            />
          ))}
          <button onClick={clearCart}>Clear Cart</button>
          <button>Checkout</button>
        </>
      )}
    </>
  );
}

export default Cart;
