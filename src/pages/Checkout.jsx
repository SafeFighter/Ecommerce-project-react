import Header from "../components/Header";
import { useContext } from "react";
import CartContext from "../context/CartContext";

function Checkout() {
  const { cart } = useContext(CartContext);
  const prices = cart.map((item) => item.price);
  let sum = 0;
  prices.forEach(sumPrice);
  console.log(prices);

  function sumPrice(priceArray) {
    sum += priceArray;
  }
  return (
    <>
      <Header />
      <div className="container">
        <div>
          <h1 className="text-primary mb-5">Checkout</h1>
        </div>
        <div className="d-flex">
          <form className="w-50 p-3" action="">
            <div className="mb-3 row align-items-center">
              <label
                htmlFor="firstName"
                className="col-sm-4 col-form-label text-light"
              >
                First Name:
              </label>
              <div className="col-sm-8">
                <input
                  id="firstName"
                  type="text"
                  className="form-control"
                  required
                />
              </div>
            </div>

            <div className="mb-3 row align-items-center">
              <label
                htmlFor="lastName"
                className="col-sm-4 col-form-label text-light"
              >
                Last Name:
              </label>
              <div className="col-sm-8">
                <input
                  id="lastName"
                  type="text"
                  className="form-control"
                  required
                />
              </div>
            </div>

            <div className="mb-3 row align-items-center">
              <label
                htmlFor="email"
                className="col-sm-4 col-form-label text-light"
              >
                Email:
              </label>
              <div className="col-sm-8">
                <input
                  id="email"
                  type="email"
                  className="form-control"
                  required
                />
              </div>
            </div>

            <div className="mb-3 row align-items-center">
              <label
                htmlFor="number"
                className="col-sm-4 col-form-label text-light"
              >
                Number:
              </label>
              <div className="col-sm-8">
                <input
                  id="number"
                  type="text"
                  pattern="[0-9]+"
                  className="form-control"
                  required
                />
              </div>
            </div>

            <div className="mb-3">
              <p className="text-light mb-2">Payment method</p>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="payment"
                  id="paymentCard"
                />
                <label
                  className="form-check-label text-light"
                  htmlFor="paymentCard"
                >
                  Card
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="payment"
                  id="paymentPayPal"
                />
                <label
                  className="form-check-label text-light"
                  htmlFor="paymentPayPal"
                >
                  PayPal
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="payment"
                  id="paymentCash"
                />
                <label
                  className="form-check-label text-light"
                  htmlFor="paymentCash"
                >
                  Cash
                </label>
              </div>
            </div>

            <button className="btn btn-success">Pay</button>
          </form>
        </div>
        <div>
          <p className="text-light">
            {sum != 0 ? `Total price: ${sum}$` : "Cart is empty"}
          </p>
        </div>
      </div>
    </>
  );
}

export default Checkout;
