import { Link } from 'react-router-dom';

const OrderSuccess = () => {
  return (
    <div className="container mt-5">
      <h2>Order Successful!</h2>
      <p>Thank you for your order. Your order has been placed successfully.</p>
      <Link to="/" className="btn btn-primary">Continue Shopping</Link>
    </div>
  );
}
export default OrderSuccess;