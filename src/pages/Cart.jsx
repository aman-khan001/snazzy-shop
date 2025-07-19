import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  removeItem,
  increaseQuantity,
  decreaseQuantity,
} from "../store/cartSlice";

const Cart = () => {
  
  useEffect(() => {
    document.title = "Carts | snazzy-shop";
  }, []);

  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  return (
    <div className="my-5" style={{height: "90vh"}}>
      <div className="d-flex justify-content-between align-items-center px-5">
        <h1 className="">Your Carts List</h1>
        <button
          className="btn btn-primary ms-auto"
          onClick={() => dispatch({ type: "cart/clearCart" })}
        >
          Clear Cart
        </button>
      </div>
      {cartItems.length === 0 ? (
        <div className="alert alert-primary my-5 w-50 mx-auto" role="alert">
          Your cart is empty! Start adding items to your cart.
        </div>
      ) : (
        <div className="table-responsive m-5">
          <div className="bg-light w-75 mx-auto p-4 rounded-4 my-5">
            <table className="table  p-5 table-striped">
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
                    <td>${item.price}</td>
                    <td>{item.quantity}</td>
                    <td>${item.price * item.quantity}</td>
                    <td>
                      <button
                        className="btn btn-secondary me-2"
                        onClick={() =>
                          dispatch({
                            type: "cart/increaseQuantity",
                            payload: item.id,
                          })
                        }
                      >
                        +
                      </button>
                      <button
                        className="btn btn-secondary me-2"
                        onClick={() =>
                          dispatch({
                            type: "cart/decreaseQuantity",
                            payload: item.id,
                          })
                        }
                      >
                        -
                      </button>

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
          </div>

          <h3>
            Total Amount: $
            {cartItems.reduce(
              (acc, item) => acc + item.price * item.quantity,
              0
            )}
          </h3>
          <Link to={"/checkout"} className="btn btn-success">
            Checkout
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
