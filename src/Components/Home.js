import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section
        className="hero"
        style={{
          backgroundImage: `url('https://img.freepik.com/free-photo/shopping-bag-cart_23-2148879396.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "#fff",
        }}
      >
        <div className="hero-content">
          <h1>Welcome Maryam</h1>
          <p>Discover Premium Products — All in One Store</p>
          <button className="explore-btn">Shop Now</button>
        </div>
      </section>

      {/* Services Section */}
      <section c
      className="services">
        <div className="service-card">
          <img
          src="https://static.vecteezy.com/system/resources/previews/035/164/248/non_2x/truck-and-flames-silhouette-fast-delivery-icon-design-express-fast-moving-shipping-delivery-logo-illustration-vector.jpg"
            alt="delivery"
          />
          <h3>Fast Delivery</h3>
          <p>Get your products delivered quickly at your doorstep.</p>
        </div>
        <div className="service-card">
          <img
            src="https://img.icons8.com/color/96/lock--v1.png"
            alt="secure"
          />
          <h3>Secure Payment</h3>
          <p>Pay safely with trusted and secure methods.</p>
        </div>
        <div className="service-card">
          <img
            src="https://img.icons8.com/color/96/customer-support.png"
            alt="support"
          />
          <h3>24/7 Support</h3>
          <p>We are here anytime you need help or guidance.</p>
        </div>
      </section>

      {/* Showcase Banner */}
      <section className="showcase">
        <div className="showcase-content">
          <h2>Elegance Meets Technology</h2>
          <p>Upgrade your lifestyle with our premium collection.</p>
        </div>
      </section>
    </div>
  );
}

export default Home;