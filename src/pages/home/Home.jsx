import React from "react";
import "./home.scss";
import Navbar from "../../components/navbar/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home-container">
        <h1>Home Page</h1>
      </div>
    </>
  );
};

export default Home;
