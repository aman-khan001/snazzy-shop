import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"


const Home = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [])

  return (
    <div>
      <h1>Welcome to Snazzy Shop</h1>
      <p>Your one-stop shop for all things snazzy!</p>
      <p>Check out our latest products and offers.</p>
      <button className="btn btn-primary">Shop Now</button>
      <div className="mt-4">
        <h2>Featured Products</h2>
        <p>Explore our exclusive collection of snazzy products.</p>
        {
          products.map((product) => (
            <div className="card mb-3" key={product.id}>
              <img src={product.image} className="card-img-top" alt={product.title} />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text"><strong>₹{product.price}</strong></p>
                <Link to={`/product/${product.id}`} className="btn btn-primary">View Details</Link>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Home