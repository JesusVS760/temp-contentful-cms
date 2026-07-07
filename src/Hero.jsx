import React from "react";
import heroImg from "./assets/hero.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur
            fugit maxime minima animi suscipit nobis reprehenderit itaque
            magnam, debitis atque porro perspiciatis sapiente distinctio
            repudiandae qui optio. In, odio omnis?
          </p>
        </div>
        <div className="img-container">
          <img
            src={heroImg}
            alt="woman the and browser
            "
            className="img"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
