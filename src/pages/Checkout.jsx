import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const navigate = useNavigate();
  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const handleCheckout = () => {
    // Implement your checkout logic here
    console.log("Proceeding to payment with total:", total);
    navigate("/order-success", { state: { total } });
  };
  return (
    <div className="container mt-5" style={{height: "70vh"}}>
      <h2 className="text-center my-5">Checkout</h2>
      {cartItems.length === 0 ? (
        <p>
          Your cart is empty. Please add items to your cart before proceeding.
        </p>
      ) : (
        <div>
          <h3>Order Summary</h3>
          <ul className="list-group mb-4">
            {cartItems.map((item) => (
              <li
                className="list-group-item d-flex justify-content-between align-items-center"
                key={item.id}
              >
                {item.title} (x{item.quantity}) - ${item.price * item.quantity}
              </li>
            ))}
          </ul>
          <h4>Total Amount: ${Math.round(total)}</h4>
          <button className="btn btn-primary" onClick={handleCheckout}>
            Place Order
          </button>
        </div>
      )}
    </div>
  );
};
export default Checkout;
