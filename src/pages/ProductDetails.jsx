import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../store/cartSlice";
import axios from "axios";
import { useEffect, useState } from "react";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://fakestoreapi.com/products/" + id
        );
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  if (!product) {
    return <h2>Product not found!</h2>;
  }

  const dispatch = useDispatch();
  return (
    <div className="w-75 mx-auto">
      <h1>Product Details Page</h1>
      <p>
        This page will display detailed information about a specific product.
      </p>
      <p>
        It will include product images, descriptions, specifications, and
        customer reviews.
      </p>
      
      <div className="mt-4">
        <h2>{product.title}</h2>
        <img src={product.image} alt="Product" className="img-fluid" />
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
        <button
        onClick={() => dispatch(addItem(product))}
        className="btn btn-primary"
      >
        Add to Cart 
      </button>
        <div className="mt-4">
          <h3>Customer Reviews</h3>
          <p>No reviews yet. Be the first to review this product!</p>
          <form>
            <div className="mb-3">
              <label htmlFor="review" className="form-label">
                Write a Review
              </label>
              <textarea
                className="form-control"
                id="review"
                rows="3"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit Review
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
