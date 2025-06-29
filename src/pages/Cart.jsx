import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "../store/cartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  return (
    <div>
      <h1 className="">Your Cart</h1>
      {cartItems.length === 0 ? (
        <div className="alert alert-info" role="alert">
          Your cart is empty! Start adding items to your cart.
        </div>
      ) : (
        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Product</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Total</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td>{item.title}</td>
                  <td>₹{item.price}</td>
                  <td>{item.quantity}</td>
                  <td>₹{item.price * item.quantity}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => dispatch(removeItem(item.id))}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <h3>Total Amount: ₹{cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)}</h3>
          <button className="btn btn-success">Checkout</button>
        </div>
      )  
      }
      
    </div>
  );
};

export default Cart;
