import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Slider from "../components/Swiper";
import axios from "axios";
import MensShirts from "../components/MensShirts";
import MensShoes from "../components/MensShoes";



const Home = () => {
  
  useEffect(() => {
    document.title = "Home | snazzy-shop"
  }, [])

  return (
    <div className="container">
      <div className="container" style={{ marginTop: "25vh", height: "95vh" }}>
        <div className="row">
          <div className="col-md-6 mb-5">
            <h1>
              Welcome to <span className="text-primary">SnazzyShop</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
              perspiciatis cum! Dolorum quos atque ex accusantium molestiae
              earum dicta optio dolorem animi perferendis magnam obcaecati
              quisquam iure ab, qui voluptates.
            </p>
            <button className="btn btn-primary">Explore Now</button>
          </div>
          <div className="col-md-6">
            <Slider />
          </div>
        </div>
      </div>
      <MensShirts />
      <MensShoes />
    </div>
  );
};

export default Home;
