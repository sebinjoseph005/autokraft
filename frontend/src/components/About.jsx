import React from 'react';
import '../styles/about.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <h2>About AA-AutoKraft</h2>
        <p className="tagline">Driven by Passion, Built with Precision.</p>
        
        <div className="about-text">
          <p>At AA-AutoKraft, we're more than just a brand — we're a team of car enthusiasts, engineers, and visionaries committed to delivering premium car parts that enhance performance, style, and safety. Whether you're a gearhead upgrading your ride or a garage pro working on client builds, our curated selection of top-tier components ensures you get the best every time.</p>
          
          <p>Founded with a mission to bridge quality and affordability, AutoKraft sources only the finest materials and partners with trusted manufacturers around the globe. We understand the thrill of the drive — and we're here to make sure your car feels just as good as it looks.</p>
        </div>
        
        <div className="why-choose">
          <h3>Why Choose AA-AutoKraft?</h3>
          <ul>
            <li><i className="fas fa-car"></i> Premium Quality Car Parts</li>
            <li><i className="fas fa-globe"></i> Trusted by Auto Experts Nationwide</li>
            <li><i className="fas fa-cogs"></i> Engineered for Performance and Durability</li>
            <li><i className="fas fa-truck"></i> Fast, Reliable Shipping</li>
            <li><i className="fas fa-headset"></i> Dedicated Support for Every Customer</li>
          </ul>
          
          <p className="closing">Whether you're modifying, repairing, or building from scratch — AutoKraft is your ultimate pit stop.</p>
        </div>
      </div>
    </section>
  );
};

export default About;
