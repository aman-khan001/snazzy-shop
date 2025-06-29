import { useParams } from "react-router-dom"
import products from "../data/products";
import { useDispatch } from "react-redux";
import { addItem } from "../store/cartSlice";

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  if (!product) {
    return <h2>Product not found!</h2>;
  }

  const dispatch = useDispatch();
  return (
    <div>
      <h1>Product Details Page</h1>
      <p>This page will display detailed information about a specific product.</p>
      <p>It will include product images, descriptions, specifications, and customer reviews.</p>
      <button onClick={()=> dispatch(addItem(product))}  className="btn btn-primary">Add to Cart 🛒</button>
      <div className="mt-4">
        <h2>{product.title}</h2>
        <img src={product.image} alt="Product" className="img-fluid" />
        <p>{product.description}</p>
        <p>Price: ₹{product.price}</p>
        <button className="btn btn-success">Buy Now</button>
        <button className="btn btn-secondary ms-2">Add to Wishlist</button>
        <div className="mt-4">
          <h3>Customer Reviews</h3>
          <p>No reviews yet. Be the first to review this product!</p>
          <form>
            <div className="mb-3">
              <label htmlFor="review" className="form-label">Write a Review</label>
              <textarea className="form-control" id="review" rows="3"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit Review</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails