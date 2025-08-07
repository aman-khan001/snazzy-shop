import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Wishlist = () => {
  const wishlist = useSelector(state => state.wishlist.wishlist)
  return (
    <div className="p-5">
      <h2 className="text-center fw-bold mb-4"> Your Wishlist ❤️</h2>
      {wishlist.length === 0 ? (
        <h4>No Items in Your Wishlist</h4> 
      ) : (
        <div className="d-flex justify-content-center flex-wrap align-items-center h-100 gap-5">
          {wishlist.map(product => (
            <div key={product.id} className="col-md-3 m-3 border rounded p-4">
              <div className="w-50 h-50 mx-auto">
                <img src={product.thumbnail} alt="" className="img-fluid  object-fit-cover "  style={{ height: "12rem" }} />
              </div>
              <h3>{product.title.length >= 20 ? product.title.slice(0, 20) + "..." : product.title}</h3>
              <p>${product.price}</p>
              <Link to={`/product/${product.id}`} className="text-decoration-underline mt-2 text-primary">View</Link>
            </div>
          ))}
        </div>
      )
    }
    </div>
  )
}

export default Wishlist