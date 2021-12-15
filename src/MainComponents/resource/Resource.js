import React from "react";
import "./resStyle.css";
import b420003 from "./../../Assets/senior_images/b420003.jpg";
import Navbar from "./../../Shared/Components/Navbar/Navbar";
import Particle from "./../../Shared/Components/Particle/Particle";

export default function Resource() {
  const card = (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={b420003} alt="Avatar" className="img-001" />
          <h3 className="name">Aditya Sandilya</h3>
          <h3 className="id">ID: B420003</h3>
        </div>
        <div
          className="flip-card-back"
          style={{ width: "250px", height: "300px" }}
        >
          <div className="tag">TAGLINE SHORT</div>
          <div className="skills">
            <h3>Skills:</h3>
            <p className="para">
              Competitive Programming
              <br />
              Web Development
              <br />
              Machine Learning
            </p>
          </div>
          <div className="achievements">
            <h3>Achievements:</h3>
            <p className="para">Google Kickstart Round 2, Dogs don't bite me</p>
          </div>
          <div className="contact">
            Contact through: Whatsapp, Mail, Instagram
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <Navbar />
      <Particle />
      <div className="bg-main">
        <h1 className="head1">RESOURCES</h1>
        <h2 className="head2">For your Academic needs, and a bit extra!</h2>
        <div className="container-001">{card}</div>
      </div>
    </>
  );
}
