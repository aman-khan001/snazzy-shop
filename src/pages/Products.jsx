import React, {useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import axios from 'axios';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [selectedCategory, setSelectedCategory] = useState("all")


  useEffect(() => {
    document.title = "Products | snazzy-shop"

    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products");
        setProducts(response.data.products);
        setFilteredProducts(response.data.products)
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    const fetchCategories = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/products/categories')
        setCategories([{slug: "all"}, ...response.data])
        console.log(response.data)
      } catch (error) {
        console.log(error)
      }
    }

    fetchProducts();
    fetchCategories();
  }, []);
  console.log(selectedCategory)
  return (
    <div className="mt-4">
        <h2>All Products</h2>
        <div className="container">
          <div className="d-flex align-items-center gap-4">
            <label htmlFor="" className="">Filter by Categories:</label>
            <select name="" value={selectedCategory} id="category" className="p-2 rounded border"
              onChange={(e) => {
                let cat = e.target.value
                console.log(e.target.value)
                setSelectedCategory(cat)
                setFilteredProducts(cat === "all"? products : products.filter( p => p.category == selectedCategory))
              }}
            >
              {categories.map((cat, index) => (
                <option value={cat.slug} key={Math.random() * 100 + 1}>
                  {cat.slug}
                  
                </option>
              ))}
            </select>
          </div>
          <div className="row w-100 p-3">
            {filteredProducts.map((product) => (
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
                    <h5 className="card-title">{product.title.length >= 20 ? product.title.slice(0, 20) + "..." : product.title}</h5>
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

export default Products