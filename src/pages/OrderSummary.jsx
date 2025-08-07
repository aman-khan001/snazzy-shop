import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

const OrderSummary = () => {
  const cartItems = useSelector(state => state.cart.items)
  // console.log(cartItems)
  const navigate = useNavigate();
  
  const testing = cartItems.forEach(item => console.log(item.price))

  const totalAmount = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
  console.log(totalAmount)
  return (
    <div className="w-75 mt-5  mx-auto p-5 bg-white text-dark rounded shadow-lg">
      <h1 className="mb-4">Order Summary</h1>

      {cartItems.length === 0 ? (
        <h1>Your cart is empty</h1>
      ):(
        <>
          <ul className="mb-5">
            {cartItems.map(item => (
              <li key={item.id}
              className="d-flex justify-content-between align-items-center border "
              >
                <div>
                  <h3>{item.title}</h3>
                  <p>
                    ₹{item.price.toFixed(2)} x {item.quantity}
                  </p>
                </div>
                <p>
                  ₹{(item.price * item.quantity).toFixed(2)}
                </p>
              </li>
            ))}
          </ul>
          <div className="d-flex justify-content-between align-items-center">
            <span>Total:</span>
            <span>{totalAmount.toFixed(2)}</span>
          </div>

          <button onClick={() => {alert("Order placed successfully!"); navigate('/')}} className="btn-btn-success">Place Order</button>
        </>
      )}
    </div>
  )
}

export default OrderSummary