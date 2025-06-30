import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Welcome to Snazzy Shop</h1>
      <div className="mt-4">
        <h2>Featured Products</h2>
        <div className="container">
          <div className="row w-100 p-3">
            {products.map((product) => (
              <div className="col-md-4 mb-4">
                <div className="card mb-3" key={product.id}>
                  <img
                    src={product.image}
                    className="card-img-top img-fluid w-100 object-fit-cover"
                    style={{ height: "400px" }}  
                    alt={product.title}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{product.title.slice(0, 20)}</h5>
                    <p className="card-text">{product.description.slice(0, 150)}</p>
                    <p className="card-text">
                      <strong>${product.price}</strong>
                    </p>
                    <Link
                      to={`/product/${product.id}`}
                      className="btn btn-primary"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
