import Header from "../components/Header";
import CartContext from "../context/CartContext";
import { useContext } from "react";
import CartItem from "../components/CartItem";
import "../styles/cart.css";
function Cart() {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);
  return (
    <>
      <Header />
      <div className="cart-container">
        <h2 className="mb-4">🛒 Your Cart</h2>

        {cart.length === 0 ? (
          <p>Your cart is empty!</p>
        ) : (
          <>
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.title} />
                <div className="cart-item-info">
                  <h5>{item.title}</h5>
                  <span>{item.price}$</span>
                </div>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            ))}

            <div className="cart-actions">
              <button className="btn btn-warning" onClick={clearCart}>
                Clear Cart
              </button>
              <button className="btn btn-success">Checkout</button>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Cart;
