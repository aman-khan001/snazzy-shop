// "mens-shoes"
import React, {useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import axios from 'axios';

const MensShoes = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // "mens-shirts"
        const response = await axios.get("https://dummyjson.com/products/category/mens-shoes");
        setProducts(response.data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);
  return (
    <div className="mt-4">
        <h2>Men's Shoes</h2>
        <div className="container">
          <div className="row w-100 p-3">
            {products.map((product) => (
              <div className="col-md-4 mb-4" key={product.id}>
                <div className="card product-card mb-4" >
                  <div className="card-img-wrapper">
                    <img
                      src={product.thumbnail}
                      className="card-img-top img-fluid"
                      alt={product.title}
                    />
                  </div>
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{product.title.slice(0, 20)}</h5>
                    {/* <p className="card-text text-muted">
                      {product.description.slice(0, 100)}...
                    </p> */}
                    <div className="mt-auto d-flex justify-content-between align-items-center">
                      <span className="fw-bold text-primary">
                        ${product.price}
                      </span>
                      <Link
                        to={`/product/${product.id}`}
                        className="btn btn-outline-primary btn-sm"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
  )
}

export default MensShoes