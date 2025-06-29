import React from "react";

const Cart = () => {
  return (
    <div>
      <h1 className="">Your Cart</h1>
      
      <button className="btn btn-primary">Proceed to Checkout</button>
      <button className="btn btn-secondary ms-2">Continue Shopping</button>
      <div className="mt-4">
        <h2>Your Cart Items</h2>
        <p>No items in the cart yet. Start shopping to add items!</p>
        {/* Here you can map through cart items and display them */}

        Example item structure:
        <div className="cart-item">
          <img src="product-image.jpg" alt="Product" className="img-fluid" />
          <h3>Product Name</h3>
          <p>Price: ₹1000</p>
          <p>Quantity: 1</p>
          <button className="btn btn-danger">Remove</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
