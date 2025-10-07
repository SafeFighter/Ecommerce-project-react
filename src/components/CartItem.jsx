function CartItem({ item, onRemove }) {
  return (
    <>
      <div className="cart-item">
        <img src={item.image} alt={item.title} width="80" />
        <div>
          <h5>{item.title}</h5>
          <p>Price: ${item.price}</p>
          <p>Quantity: 1</p>
        </div>
        <button onClick={onRemove}>Remove</button>
      </div>
    </>
  );
}

export default CartItem;
