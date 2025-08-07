import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../store/cartSlice";
import axios from "axios";
import { useEffect, useState } from "react";
import Popup from "../components/Popup";
import { toggleWishList } from "../store/wishListSlice";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProducts] = useState([]);
  const [isAdded, setIsAdded] = useState(false)

  const handlePopup = () => {
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
    }, 2000);
  };


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          'https://dummyjson.com/products/' + id
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
  const wishlist = useSelector(state => state.wishlist.wishlist)
  const isWished = wishlist.some(p => p.id === product.id)

  return (
    <div className="w-75 mx-auto my-5">
      
      
      <div className="mt-4">
        <h2>{product.title}</h2>
        <img src={product.thumbnail} alt="Product" className="img-fluid" />
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
        <button
        onClick={() => {
          dispatch(addItem(product))
          handlePopup()
        }}
        className="btn btn-primary"
      >
        Add to Cart 
      </button> 
      <button onClick={() => dispatch(toggleWishList(product))} className="btn ms-3 btn-dark border-0 bg-transparent fs-3">
        {isWished ? "❤️" : "♡"}
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
      {isAdded && <Popup />}
    </div>
  );
};

export default ProductDetails;
